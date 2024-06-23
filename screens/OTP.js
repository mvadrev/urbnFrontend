import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(new Array(4).fill("")); // Assuming OTP is 4 digits

  const handleOTPInput = (text, index) => {
    const newOtp = otp.map((digit, idx) => (idx === index ? text : digit));
    setOtp(newOtp);

    // Auto-focus to next input
    if (text && index < otp.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const inputs = [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OTP Verification</Text>
      <Text style={styles.subHeader}>
        Enter the one time password sent on +91 9876787878
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleOTPInput(text, index)}
            value={digit}
            ref={(ref) => (inputs[index] = ref)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendButtonText}>
          Didn't receive the OTP? RESEND OTP
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify and proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpBox: {
    width: Dimensions.get("window").width / 6,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 18,
  },
  resendButton: {
    marginBottom: 20,
  },
  resendButtonText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  verifyButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OTPVerificationScreen;
