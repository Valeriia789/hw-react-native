import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";

import BackgroundImg from "../assets/images/background.jpg";

export default function LoginScreen(initialState) {
  const [state, setState] = useState(initialState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Welcome", `${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={BackgroundImg} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : null}
          >
            <View style={styles.form}>
              <View style={styles.formHeader}>
                <Text style={styles.formTitle}>Sign In</Text>
              </View>

              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />
              <Button
                title={"Sign In"}
                style={styles.input}
                onPress={onLogin}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 50 : 100,

  container: {
    flex: 1,
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "lightblue",
    //   },
    //   android: {
    //     backgroundColor: "pink",
    //   },
    // }),
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  form: {
    padding: 20,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#ffffff",
  },

  formHeader: {
    alignItems: "center",
  },

  formTitle: {
    fontFamily: "AmaticSC-Regular",
    fontSize: 30,
    color: "#000000",
  },

  input: {
    height: 50,
    marginBottom: 12,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",

    color: "#171717",
    backgroundColor: "#F6F6F6",
  },
});
