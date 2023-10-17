import React, { useCallback } from "react";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function App() {

  return (
    <>
      {/* <RegistrationScreen></RegistrationScreen> */}
      <LoginScreen initialState={initialState}></LoginScreen>
    </>
  );
}
