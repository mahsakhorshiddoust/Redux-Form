// Action Types
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setUserPassword = (password) => ({
  type: SET_USER_PASSWORD,
  payload: password,
});
