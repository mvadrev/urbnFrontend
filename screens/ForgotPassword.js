import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure @expo/vector-icons is installed

const ForgotPasswordScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { key: "sms", label: "via sms", value: "xxxx xxxx 89" },
    { key: "email", label: "via email", value: "xxxxxst@gmail.com" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fliier</Text>
      </View>
      <Text style={styles.title}>Recover your account password</Text>
      <Text style={styles.subtitle}>
        Select the option through which you want to reset your password.
      </Text>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.option,
              selectedOption === option.key && styles.optionSelected,
            ]}
            onPress={() => setSelectedOption(option.key)}
          >
            <Ionicons
              name={
                selectedOption === option.key ? "checkbox" : "checkbox-outline"
              }
              size={24}
              color="green"
              style={styles.icon}
            />
            <Text style={styles.optionText}>
              {option.label} {option.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.requestButton} disabled={!selectedOption}>
        <Text style={styles.requestButtonText}>Request link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: "green",
    backgroundColor: "#E8F5E9",
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  requestButton: {
    width: "100%",
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  requestButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;
