import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../config";
import { Button } from "../../../components";
import { screenRoutes } from "../../../routes";

export function Success({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        minHeight: SIZES.height,
        padding: 38,
        paddingTop: 70,
        alignItems: "center",
      }}
    >
      <View
        style={{
          zIndex: 10,
          position: "absolute",
          bottom: 40,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Button
          title="Proceed to Login"
          fs={16}
          style={{ width: "100%" }}
          onPress={() => navigation.replace(screenRoutes.SignIn)}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "95%",
        }}
      >
        <View style={{ marginBottom: 16 }}>
          <Image source={require("../../../../assets/images/success.png")} />
        </View>
        <Text
          style={{
            color: COLORS.grey1,
            fontWeight: "900",
            fontSize: 16,
            marginBottom: 16,
          }}
        >
          Registration successful
        </Text>
        <Text
          style={{
            color: COLORS.grey4,
            fontSize: 16,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          You have successfully registered on{" "}
          <Text style={{ fontWeight: "900", color: COLORS.grey1 }}>Stech</Text>
        </Text>
        <Text style={{ color: COLORS.grey4, fontSize: 16 }}>
          Your Account will soon be verified!
        </Text>
      </ScrollView>
    </View>
  );
}
