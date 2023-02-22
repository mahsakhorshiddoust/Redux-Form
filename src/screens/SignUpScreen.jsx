import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setUserEmail,
  setUserPassword,
  setUserName,
} from "../../store/actions";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import { Alert } from "react-native";
import { API_URL } from "../constants";

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateInputState = (value, name) => {
    if (name === "email") {
      setEmail(value);
      dispatch(setUserEmail(value));
    } else if (name === "password") {
      setPassword(value);
      dispatch(setUserPassword(value));
    } else if (name === "name") {
      setName(value);
      dispatch(setUserName(value));
    }
  };

  const signUp = async () => {
    const formData = new FormData();
    formData.append("Email", email);
    formData.append("Password", password);
    formData.append("Name", name);
    formData.append("PlanGroup", "default");
    formData.append("UtmSource", "");
    formData.append("UtmMedium", "");
    formData.append("UtmCampaign", "");
    formData.append("WeekMode", new Date().getDay() === 0 ? 0 : 1);
    formData.append("WithAuthToken", true);

    setIsLoading(true);

    const res = await fetch(`${API_URL}/api/user/`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      Alert.alert("Success", data.message);
    } else {
      Alert.alert("Error", data.message);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Input
        placeholder={"Email"}
        value={email}
        onChange={(value) => updateInputState(value, "email")}
      />
      <Input
        placeholder={"Password"}
        value={password}
        secureTextEntry={true}
        autoCapitalize={"none"}
        onChange={(value) => updateInputState(value, "password")}
      />
      <Input
        placeholder={"Name"}
        value={name}
        onChange={(value) => updateInputState(value, "name")}
      />
      <Button text={"Sign Up"} onPress={signUp} />
    </Container>
  );
};

export default SignUpScreen;
