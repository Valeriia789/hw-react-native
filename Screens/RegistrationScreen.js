import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (text) => setUsername(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onRegister = () => {
    Alert.alert("Credentials", `${username} + ${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/background.jpg")}
        >
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <Text style={styles.inputTitle}>Enter your name</Text>
                <TextInput
                  value={username}
                  onChangeText={usernameHandler}
                  placeholder="Username"
                  style={styles.input}
                  // textAlign="center"
                />
              </View>

              <View>
                <Text style={styles.inputTitle}>Enter your email</Text>
                <TextInput
                  value={email}
                  onChangeText={emailHandler}
                  placeholder="Email"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.inputTitle}>Enter password</Text>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </View>

              <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Text style={styles.btnTitle}>Sign Up</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // height: Platform.OS === "ios" ? 50 : 100,

  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "pink",
    //   },
    //   android: {
    //     backgroundColor: 'lightblue',
    //   },
    // }),
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  form: {
    marginHorizontal: 20,
  },
  inputTitle: {
    marginBottom: 4,
    color: "#E8E8E8",
  },
  input: {
    height: 50,

    marginBottom: 12,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 26,

    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'transparent',
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: '#F6F6F6',
  }
});
