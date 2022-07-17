import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES } from "../../../config";
import { screenRoutes } from "../../../routes";

export function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(screenRoutes.SignIn);
    }, 3000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: COLORS.primary1,
        height: SIZES.height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 50, fontWeight: "700" }}>
        Stech
      </Text>
    </View>
  );
}
