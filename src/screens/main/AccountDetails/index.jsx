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

export function AccountDetails({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  const [isLoading, setIsLoading] = useState(false);

  const body = { email, firstName, lastName };

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
      <HeaderWithBackBtn navigation={navigation} title="Account Details" />
      <ScrollView
        style={{ marginTop: 20, padding: 38 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: 40 }}>
          <Input
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            title="First name"
            placeholder="Enter first name"
          />
          <Input
            title="Last name"
            value={lastName}
            placeholder="Enter last name"
            onChangeText={(text) => setLastName(text)}
          />
          <Input
            title="Email address"
            value={email}
            placeholder="Enter email address"
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            title="Phone number"
            value={phone}
            placeholder="Enter phone number"
            onChangeText={(text) => setPhone(text)}
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
