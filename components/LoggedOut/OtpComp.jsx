import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const OtpComp = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "800" }}>Enter OTP</Text>
      <TextInput
        placeholder="123456"
        style={{ borderWidth: 1, width: "80%", marginTop: 20 }}
        textAlign={"center"}
      ></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetails")}
        style={{
          backgroundColor: "#FFA500",
          padding: 10,
          margin: 2,
          width: "80%",
          position: "absolute",
          bottom: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ textAlign: "center" }}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpComp;

const styles = StyleSheet.create({});
