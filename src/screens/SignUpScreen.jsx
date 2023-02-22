import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import { updateInputState, handleSignUp } from "../utils/helpers";

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.signup.email);
  const password = useSelector((state) => state.signup.password);
  const name = useSelector((state) => state.signup.name);

  // Handle input change
  const handleInputChange = (value, name) => {
    updateInputState(name, value, dispatch);
  };

  // Handle sign up a new user
  const signUp = () => {
    handleSignUp(email, password, name, dispatch);
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Input
        placeholder={"Email"}
        value={email}
        onChange={(value) => handleInputChange(value, "email")}
      />
      <Input
        placeholder={"Password"}
        value={password}
        secureTextEntry={true}
        autoCapitalize={"none"}
        onChange={(value) => handleInputChange(value, "password")}
      />
      <Input
        placeholder={"Name"}
        value={name}
        onChange={(value) => handleInputChange(value, "name")}
      />
      <Button text={"Sign Up"} onPress={() => signUp(email, password, name)} />
    </Container>
  );
};

export default SignUpScreen;
