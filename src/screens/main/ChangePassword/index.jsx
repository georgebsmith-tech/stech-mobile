import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  Image
} from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../../../config";
import { Button, HeaderWithBackBtn, Input } from "../../../components";
import { screenRoutes } from "../../../routes";
import { postData } from "../../../utils/services/postServices";
import { UserContext } from "../../../contexts";
import Toast from "react-native-toast-message";

export function ChangePassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const body = { email, password };

  const showToast = ({ type, text1, text2 }) => {
    Toast.show({
      type,
      text1,
      text2
    });
  };

  const handleLogin = async () => {
    try {
      console.log(body);
      setIsLoading(true);
      const data = await postData("/auth/login", body);
      // console.log(data);
      if (data.error) {
        showToast({
          type: "error",
          text1: "Login Error",
          text2: data.error.message
        });
        setIsLoading(false);
        return;
      }
      showToast({
        type: "success",
        text1: "Congrats",
        text2: "Your Login was successful"
      });
      setIsLoading(false);
      AsyncStorage.setItem("token", data.token);
      navigation.replace(screenRoutes.Home);
      setUser(data.user);
    } catch (error) {
      console.log(error);
      showToast({
        type: "error",
        text1: "Login Error",
        text2: error.error.message
      });
      setIsLoading(false);
      return;
    }
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        minHeight: SIZES.height,

        paddingTop: 70
      }}
    >
      <Toast />
      <HeaderWithBackBtn navigation={navigation} title="Change Password" />
      <ScrollView
        style={{ marginTop: 20, padding: 38 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: 40 }}>
          <Input
            onChangeText={(text) => setEmail(text)}
            title="Old password"
            placeholder="Enter old password"
          />
          <Input
            title="New Password"
            placeholder="Enter new password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Input
            title="Confirm new password"
            placeholder="Confirm new password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <Button
          //   onPress={() => navigation.push(screenRoutes.Home)}
          onPress={handleLogin}
          title={isLoading ? <ActivityIndicator color={"#fff"} /> : "Save"}
          disabled={isLoading}
        />

        <View style={{ height: 160 }} />
      </ScrollView>
    </View>
  );
}
