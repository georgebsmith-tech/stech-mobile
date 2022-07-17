import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../../../config";
import { Button, Input, Select } from "../../../components";
import { screenRoutes } from "../../../routes";
import Toast from "react-native-toast-message";
import { postData } from "../../../utils/services/postServices";
import Modal from "react-native-modal";

const access = { Hospital: "hospital", "Lecturer/Campus Official": "staff" };

export function SignUp({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [as, setAs] = useState("");

  const showToast = ({ type, text1, text2 }) => {
    Toast.show({
      type,
      text1,
      text2,
    });
  };
  const body = {
    email,
    password,
    firstName,
    lastName,
    phone,
    as: access[as],
    gender: gender.toLowerCase(),
  };

  const handleRegister = async () => {
    try {
      console.log(body);
      setIsLoading(true);
      const data = await postData("/auth", body);
      // console.log(data);
      if (data.error) {
        showToast({
          type: "error",
          text1: "Registration Error",
          text2: data.error.message,
        });
        return;
      }
      showToast({
        type: "success",
        text1: "Congrats",
        text2: "Your Registration was successful",
      });
      // AsyncStorage.setItem("token", data.token);
      navigation.replace(screenRoutes.Success);

      setIsLoading(false);
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
      {/* Toaster */}
      <Toast />

      <View>
        <Modal isVisible={false}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 14,
                width: "100%",
              }}
            >
              <Text>I am the modal content!</Text>
            </View>
          </View>
        </Modal>
      </View>
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
          Please enter your details to create an account!!
        </Text>
      </View>

      <ScrollView
        style={{ marginTop: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Input
          title="First Name"
          placeholder="Your First Name"
          onChangeText={(text) => setFirstName(text)}
        />
        <Input
          title="Last Name"
          placeholder="Your Last Name"
          onChangeText={(text) => setLastName(text)}
        />
        <Input
          title="Phone"
          placeholder="Your Mobile Number"
          onChangeText={(text) => setPhone(text)}
        />
        <Select
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          value={gender}
          setValue={setGender}
        />
        <Select
          title="Register as a:"
          options={[
            { label: "Hospital", value: "hospital" },
            { label: "Lecturer/Campus Official", value: "staff" },
          ]}
          value={as}
          setValue={setAs}
        />

        <Input onChangeText={(text) => setEmail(text)} />
        <Input
          title="Passowrd"
          placeholder="Your password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button
          onPress={handleRegister}
          title={isLoading ? <ActivityIndicator color={"#fff"} /> : "Sign Up"}
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
            Already have an account?
          </Text>
          <TouchableOpacity
            style={{ padding: 0, marginLeft: 3 }}
            onPress={() => navigation.push(screenRoutes.SignIn)}
          >
            <Text
              style={{
                color: COLORS.primary1,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}
