import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../config";

export function Button({
  title = "Sign In",
  style = {},
  disabled = false,
  fs = 14,
  ...rest
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: COLORS.primary1,
        opacity: disabled ? 0.6 : 1,

        padding: 17,
        alignItems: "center",
        borderRadius: 4,
        marginTop: 10,
        ...style,
      }}
      {...rest}
    >
      <Text style={{ color: "#fff", fontSize: fs }}>{title}</Text>
    </TouchableOpacity>
  );
}
