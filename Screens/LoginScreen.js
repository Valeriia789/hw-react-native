// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableWithoutFeedback,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   Button,
// } from "react-native";

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const emailHandler = (text) => setEmail(text);
//   const passwordHandler = (text) => setPassword(text);

//   const onRegister = () => {
//     Alert.alert("Credentials", `${email} + ${password}`);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <TextInput
//             value={email}
//             onChangeText={emailHandler}
//             placeholder="Email"
//             style={styles.input}
//           />
//           <TextInput
//             value={password}
//             onChangeText={passwordHandler}
//             placeholder="Password"
//             secureTextEntry={true}
//             style={styles.input}
//           />
//           <Button title={"Sign In"} style={styles.input} onPress={onRegister} />
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   height: Platform.OS === "ios" ? 50 : 100,

//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     ...Platform.select({
//       ios: {
//         backgroundColor: "lightblue",
//       },
//       android: {
//         backgroundColor: 'pink',
//       },
//     }),
//   },

//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//   },
// });
