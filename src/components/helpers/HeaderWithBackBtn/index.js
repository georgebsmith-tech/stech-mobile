import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../config";

export function HeaderWithBackBtn({ navigation, title = "Change Password" }) {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 18
      }}
    >
      <TouchableOpacity
        style={{ width: 30, paddingVertical: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../../../assets/images/back.png")} />
      </TouchableOpacity>
      <Text
        style={{
          color: COLORS.grey1,
          fontWeight: "700",
          fontSize: 16,
          textAlign: "center",
          width: 208
        }}
      >
        {title}
      </Text>
      <TouchableOpacity style={{ width: 30 }}></TouchableOpacity>
    </View>
  );
}
