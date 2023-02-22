import { Linking, Alert } from "react-native";
import {
  setUserEmail,
  setUserPassword,
  setUserName,
} from "../../store/actions";
import { API_URL } from "../constants";

// handle login navigation
export const handleLoginNavigation = (navigation) => {
  navigation.navigate("Login");
};

// handle sign up navigation
export const handleSignUpNavigation = (navigation) => {
  navigation.navigate("SignUp");
};

// update input state
export const updateInputState = (name, value, dispatch) => {
  if (name === "email") {
    dispatch(setUserEmail(value));
  } else if (name === "password") {
    dispatch(setUserPassword(value));
  } else if (name === "name") {
    dispatch(setUserName(value));
  }
};

// validate email for login
export const validateEmail = async (email, navigation, dispatch) => {
  const formData = new FormData();
  formData.append("email", email);

  const res = await fetch(`${API_URL}/api/user/register-check`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  dispatch({ type: "VALID_EMAIL", payload: data });

  if (data.validEmail === true) {
    const url = data.url;
    Linking.openURL(`${API_URL}${url}`);
  } else {
    Alert.alert("Invalid Email or Password", "Don't Have an Account?", [
      {
        text: "sign up",
        onPress: () => handleSignUp(navigation),
      },
      {
        text: "try again",
        onPress: () => handleLogin(navigation),
      },
    ]);
  }
};

// handle sign up a new user
export const handleSignUp = async (email, password, name, dispatch) => {
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

  const res = await fetch(`${API_URL}/api/user/`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  if (data.success) {
    Alert.alert("Success", data.message);
  } else {
    Alert.alert("Error", data.message);
  }
};
