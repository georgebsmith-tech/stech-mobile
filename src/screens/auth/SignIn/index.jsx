import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../../../config";
import { Button, Input } from "../../../components";
import { screenRoutes } from "../../../routes";
import { postData } from "../../../utils/services/postServices";
import { UserContext } from "../../../contexts";
import Toast from "react-native-toast-message";

export function SignIn({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const body = { email, password };

  const showToast = ({ type, text1, text2 }) => {
    Toast.show({
      type,
      text1,
      text2,
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
          text2: data.error.message,
        });
        setIsLoading(false);
        return;
      }
      showToast({
        type: "success",
        text1: "Congrats",
        text2: "Your Login was successful",
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
        text2: error.error.message,
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
        padding: 38,
        paddingTop: 100,
      }}
    >
      <Toast />
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "rgba(25, 32, 29, 1)",
            fontWeight: "900",
            fontSize: 24,
            marginBottom: 8,
          }}
        >
          Hello, welcome
        </Text>
        <Text
          style={{
            color: "rgba(68, 74, 71, 1)",
            fontWeight: "400",
            fontSize: 16,
            textAlign: "center",
            width: 208,
          }}
        >
          Enter your sign in details to access you account!
        </Text>
      </View>
      <ScrollView style={{ marginTop: 40 }}>
        <Input onChangeText={(text) => setEmail(text)} />
        <Input
          title="Passowrd"
          placeholder="Your password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button
          //   onPress={() => navigation.push(screenRoutes.Home)}
          onPress={handleLogin}
          title={isLoading ? <ActivityIndicator color={"#fff"} /> : "Sign In"}
          disabled={isLoading}
        />
        <View
          style={{
            alignItems: "center",

            fontWeight: "700",
            fontSize: 16,
            marginTop: 40,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "rgba(18, 18, 18, 1)" }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{ padding: 0, marginLeft: 3 }}
            onPress={() => navigation.push(screenRoutes.SignUp)}
          >
            <Text
              style={{
                color: COLORS.primary1,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
