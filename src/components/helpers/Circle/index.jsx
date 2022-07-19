import { View, Text } from "react-native";
import React from "react";

export function Circle({
  children,
  size = 40,
  bg = "rgba(255, 249, 238, 1)",
  style = {}
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center",
        ...style
      }}
    >
      {children}
    </View>
  );
}
