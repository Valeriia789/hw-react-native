import React from "react";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "AmaticSC-Regular": require("../assets/fonts/AmaticSC-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <RegistrationScreen></RegistrationScreen> */}
      <LoginScreen initialState={initialState}></LoginScreen>
    </>
  );
}

