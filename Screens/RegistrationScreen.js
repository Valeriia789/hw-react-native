import React, { useCallback, useEffect, useState } from "react";
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
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isReady, setIsReady] = useState(false);
  // віднімає 20 від ширини базового екрану
  const [dimensions, setDimensions] = useState(
    // Dimensions.get("window").width - 20 * 2
    Dimensions.get("window").width
  );

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "AmaticSC-Regular": require("../assets/fonts/AmaticSC-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();

    const onChange = () => {
      const width = Dimensions.get("window").width;
      // const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      try {
        Dimensions.removeEventListener("change", onChange);
      } catch (e) {
        console.warn(e);
      }
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onRegister = () => {
    Alert.alert(`${state.username} + ${state.email} + ${state.password}`);
    console.log(state);
    keyboardHide();
    setState(initialState);
  };

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/background.jpg")}
        >
          <KeyboardAvoidingView
            // якщо платформа ios, KeyboardAvoidingView додасть падінг для форми на висоту клавіатури
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View
              style={{
                ...styles.form,
                // marginBottom: isShowKeyboard ? 20 : 0,
                width: dimensions,
              }}
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
                  // onChangeText={(value) => setState({ ...state, username: value })}
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
                onPress={onRegister}
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
    alignItems: "center",
    justifyContent: "flex-end",
  },

  form: {
    // marginHorizontal: 20,
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

  inputTitle: {
    marginBottom: 4,
    fontFamily: "AmaticSC-Regular",
    color: "#a2a2a2",
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
