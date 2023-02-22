// This file is used to create the store and combine all the reducers
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";

// Combine all the reducers and apply middleware
const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
