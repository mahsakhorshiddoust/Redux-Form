import React, { useState } from "react";
import { Linking, Alert } from "react-native";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import Title from "../components/Title";
import { useDispatch } from "react-redux";
import { setUserEmail, setUserPassword } from "../../store/actions";
import { API_URL } from "../constants";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, seEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateInputState = (value, name) => {
    if (name === "email") {
      setEmail(value);
      dispatch(setUserEmail(value));
    } else if (name === "password") {
      setPassword(value);
      dispatch(setUserPassword(value));
    }
  };

  const validateEmail = async () => {
    const formData = new FormData();
    formData.append("email", email);

    const res = await fetch(`${API_URL}/api/user/register-check`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    dispatch({ type: "VALID_EMAIL", payload: data });

    if (data.validEmail) {
      const url = data.url;
      Linking.openURL(`${API_URL}${url}`);
    } else {
      Alert.alert("Invalid Email or Password", "Don't Have an Account?", [
        {
          text: "sign up",
          onPress: handleSignUp,
        },
        {
          text: "try again",
          onPress: navigation.navigate("Login"),
        },
      ]);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Container>
      <Title>Hopper</Title>
      <Input
        placeholder={"Email"}
        autoCapitalize="none"
        value={email}
        onChange={(value) => updateInputState(value, "email")}
      />
      <Input
        placeholder={"Password"}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChange={(value) => updateInputState(value, "password")}
      />
      <Button text={"Login"} onPress={validateEmail} />
      <Button text={"Sign Up"} onPress={handleSignUp} />
    </Container>
  );
};

export default LoginScreen;
