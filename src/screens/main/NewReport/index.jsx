import {
  View,
  ScrollView,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../../../config";
import { Button, HeaderWithBackBtn, Input } from "../../../components";
import { screenRoutes } from "../../../routes";
import { postProtectedData } from "../../../utils/services/postServices";
import { UserContext } from "../../../contexts";
import Toast from "react-native-toast-message";

export function NewReport({ navigation }) {
  const [name, setName] = useState("");
  const [matNo, setMatNo] = useState("");
  const [dept, setDept] = useState("");
  const [phone, setPhone] = useState("");
  const [report, setReport] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const body = { phone, name, dept, report, matNo };

  const showToast = ({ type, text1, text2 }) => {
    Toast.show({
      type,
      text1,
      text2
    });
  };

  const handleAddReport = async () => {
    try {
      console.log(body);
      setIsLoading(true);
      const token = await AsyncStorage.getItem("token");
      const data = await postProtectedData("/reports", body, token);
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
        text1: "Success",
        text2: "Report has been successfully added for " + name
      });
      setIsLoading(false);

      navigation.replace(screenRoutes.Home);
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
      <HeaderWithBackBtn navigation={navigation} title="Make a report" />
      <ScrollView
        style={{ marginTop: 20, padding: 38 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginBottom: 40 }}>
          <Input
            onChangeText={(text) => setName(text)}
            value={name}
            title="Student's name"
            placeholder="Enter Student's name"
          />
          <Input
            title="Matriculation number"
            placeholder="Enter Student's Matriculation Number"
            onChangeText={(text) => setMatNo(text)}
            value={matNo}
          />
          <Input
            title="Department"
            placeholder="Enter Student's department"
            onChangeText={(text) => setDept(text)}
            value={dept}
          />
          <Input
            title="Phone"
            placeholder="Enter Student's Contact"
            onChangeText={(text) => setPhone(text)}
            value={phone}
          />
          <Input
            title="Report"
            placeholder="Describe student's situation"
            onChangeText={(text) => setReport(text)}
            multiline={true}
          />
        </View>
        <Button
          //   onPress={() => navigation.push(screenRoutes.Home)}
          onPress={handleAddReport}
          title={
            isLoading ? <ActivityIndicator color={"#fff"} /> : "Add Report"
          }
          disabled={isLoading}
        />

        <View style={{ height: 160 }} />
      </ScrollView>
    </View>
  );
}
