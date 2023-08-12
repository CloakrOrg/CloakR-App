import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const AadharComp = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text>CloakR</Text>
      <Text>Enter Addhar No</Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="8865-8510-4865"
          style={{ borderWidth: 1, width: "80%" }}
          textAlign={"center"}
        ></TextInput>
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate("OtpPage")}
          style={{
            backgroundColor: "#FFA500",
            padding: 10,
            margin: 2,
            width: "80%",
            position:"absolute",
            bottom:10,
            borderRadius: 5,

          }}
        >
          <Text style={{ textAlign: "center" }}>Send OTP</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AadharComp;

const styles = StyleSheet.create({});
