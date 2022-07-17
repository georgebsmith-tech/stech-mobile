import React from "react";
import { View, Text, TextInput } from "react-native";
export function Input({ title = "Email address", ...rest }) {
  return (
    <View style={{ marginBottom: 32 }}>
      <Text style={{ marginBottom: 4 }}>{title}</Text>
      <TextInput
        placeholder="Your Email Address"
        style={{
          paddingVertical: 17,
          paddingHorizontal: 16,
          backgroundColor: "rgba(244, 250, 247, 1)",
          borderWidth: 1,
          borderColor: "rgba(215, 223, 219, 1)",
          borderStyle: "solid",
        }}
        {...rest}
      />
    </View>
  );
}
