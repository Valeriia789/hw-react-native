import React, { useEffect, useState } from "react";
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
  Dimensions,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "AmaticSC-Regular": require("../assets/fonts/AmaticSC-Regular.ttf"),
  });
};

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isReady, setIsReady] = useState(false);
  // віднімає 20 від ширини базового екрану
  const [ dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      setDimensions(width)
    }
    Dimensions.addEventListener('change', onChange)
    return () => {
      Dimensions.removeEventListener('change', onChange)
    }
  }, [])

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onRegister = () => {
    Alert.alert("Credentials", `${username} + ${email} + ${password}`);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/background.jpg")}
        >
          <KeyboardAvoidingView
            // якщо платформа ios, KeyboardAvoidingView додасть падінг для форми на висоту клавіатури
            // якщо платформа android, додасть просто висоту
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 0, width: dimensions }}
            >
              <View style={styles.formHeader}>
                <Text style={styles.formTitle}>Registration</Text>
              </View>

              <View>
                <Text style={styles.inputTitle}>Enter your name</Text>
                <TextInput
                  placeholder="Username"
                  style={styles.input}
                  // textAlign="center"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.username}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, username: value }))
                  }
                />
              </View>

              <View>
                <Text style={styles.inputTitle}>Enter your email</Text>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>

              <View>
                <Text style={styles.inputTitle}>Enter password</Text>
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: 'center',
  },

  form: {
    // marginHorizontal: 20,
    padding: 20,
    borderRadius: 25,
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

  inputTitle: {
    marginBottom: 4,
    fontFamily: "AmaticSC-Regular",
    color: "#a2a2a2",
  },

  input: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,

    color: "#171717",

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
    borderColor: "transparent",
    backgroundColor: "#FF6C00",

    ...Platform.select({
      ios: {},
      android: {},
    }),
  },

  btnTitle: {
    fontFamily: "AmaticSC-Regular",
    fontSize: 24,
    fontWeight: 400,
    color: "#F6F6F6",
  },
});
