import { SET_USER_NAME, SET_USER_EMAIL, SET_USER_PASSWORD } from "./actions";

const initialState = {
  email: "",
  password: "",
  name: "",
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
