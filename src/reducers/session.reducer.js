import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "./../actions";

export const defaultValue = {
  isLoggin: false,
  tokenAuth: "",
  userData: {
    email: "",
    password: ""
  }
};

const requestLogin = (state, { payload }) => {
  state.userData = payload;
};

const session = createReducer(defaultValue, {
  [Actions.RequestLogin]: requestLogin
});

export default session;
