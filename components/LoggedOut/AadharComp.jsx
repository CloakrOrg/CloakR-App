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
      <Text style={{ fontSize: 40, fontWeight: "800", marginBottom: 20 }}> CloakR</Text>

      <View
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}>
          Enter Addhar No
        </Text>
        <TextInput
          placeholder="8865-8510-4865"
          style={{ borderWidth: 1, width: "100%", height: 40, borderRadius: 20 }}
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
          position: "absolute",
          bottom: 10,
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
