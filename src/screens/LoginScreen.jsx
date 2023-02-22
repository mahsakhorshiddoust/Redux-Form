import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInputState,
  handleSignUpNavigation,
  validateEmail,
} from "../utils/helpers";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  // Handle input change
  const handleInputChange = (value, name) => {
    updateInputState(name, value, dispatch);
  };

  // Handle validate email
  const handleValidateEmail = async () => {
    await validateEmail(email, navigation, dispatch);
  };

  return (
    <Container>
      <Title>Hopper</Title>
      <Input
        placeholder={"Email"}
        autoCapitalize="none"
        value={email}
        onChange={(value) => handleInputChange(value, "email")}
      />
      <Input
        placeholder={"Password"}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChange={(value) => handleInputChange(value, "password")}
      />
      <Button text={"Login"} onPress={handleValidateEmail} />
      <Button
        text={"Sign Up"}
        onPress={() => handleSignUpNavigation(navigation)}
      />
    </Container>
  );
};

export default LoginScreen;
