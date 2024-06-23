import React, { useState } from "react";
import * as Font from "expo-font";
import axios from "axios";
import * as Yup from "yup";
import { TextInput, Button } from "react-native-paper";

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons

const fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-Regular": require("../assets/fonts/Roboto-Medium.ttf"),
    // "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

// Yup schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
});

const LoginScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    try {
      await LoginSchema.validate({ email, password }, { abortEarly: false });
      const response = await axios.post("http://localhost:3000/login", {
        username: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path === "email") setEmailError(err.message);
          if (err.path === "password") setPasswordError(err.message);
        });
      } else {
        console.error("Login Error:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image source={require("../assets/urbn.png")} />
          <Text style={styles.textBold}>URBN</Text>
        </View>
        <View style={styles.signUpTextC}>
          <Text style={styles.signUpText}>Click to login with Phone No.</Text>
        </View>
      </View>
      <View style={styles.inputC}>
        <TextInput
          style={[styles.input, emailError ? { borderColor: "red" } : {}]}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Text style={{ color: "red" }}>{emailError}</Text>
        <TextInput
          style={[styles.input, passwordError ? { borderColor: "red" } : {}]}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
          theme={{
            colors: { text: "white", placeholder: "white", primary: "white" },
          }}
        />
        <Text style={{ color: "red" }}>{passwordError}</Text>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignButton}>
        <Text style={styles.loginButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="#0e80ac" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="#007BFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    fontWeight: "bold",
  },
  signUpLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  input: {
    width: "100%",
    marginVertical: 10,
    // padding: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "blue",
    marginTop: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#2cdd93",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },

  SignButton: {
    width: "100%",
    backgroundColor: "#0e80ac",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 20,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  socialButton: {
    padding: 10,
  },
  logo: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center", // Centers content vertically within the flex container
    alignItems: "center",
  },
  signUpTextC: {
    paddingTop: 30,
  },
  inputC: {
    // marginTop: 30,
    paddingTop: 20,
    width: "100%",
  },
  textBold: {
    fontWeight: "bold", // This property makes the text bold
    paddingTop: 5,
  },
});

export default LoginScreen;
