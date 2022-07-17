import { Picker } from "@react-native-picker/picker";
import React, { useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Select = ({
  action,
  title = "Gender",
  value = "",
  options = [],
  setValue = () => {},
  containerStyle = {},
}) => {
  function open() {
    pickerRef.current?.focus();
  }
  const pickerRef = useRef();
  return (
    <View style={{ marginBottom: 32, ...containerStyle }}>
      <Text style={{ marginBottom: 4 }}>{title}</Text>

      <TouchableOpacity
        onPress={open}
        style={{
          backgroundColor: "rgba(244, 250, 247, 1)",
          padding: 17,
          paddingHorizontal: 17,
          borderRadius: 4,
          fontSize: 12,
          flexDirection: "row",
          borderColor: "rgba(215, 223, 219, 1)",
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <Text style={{ color: "rgba(114, 114, 114, 1)", marginBottom: 4 }}>
          {value || "Select"}
        </Text>
        <View
          style={{
            position: "absolute",
            zIndex: -50,
            right: -10,
            top: -5,
            backgroundColor: "red",
          }}
        >
          <Picker
            selectedValue={value}
            onValueChange={
              (itemValue, itemIndex) => setValue(itemValue)
              // setSelectedLanguage(itemValue)
            }
            ref={pickerRef}
          >
            {options.map((option, idx) => (
              <Picker.Item
                value={option.label}
                label={option.label}
                key={idx}
              />
            ))}
          </Picker>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
