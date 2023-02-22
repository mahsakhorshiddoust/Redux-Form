import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({
  value,
  placeholder,
  onChange,
  secureTextEntry,
  autoCapitalize,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default Input;
