import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";

const OtpComp = ({ navigation }) => {
  const [otpNo, setOtpNo] = useState("");
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: 20,
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{ height: 32, width: 120, }}
      ></Image>

      <View
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 300,
        }}
      >
        <Text
          style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}
        >
          Enter OTP
        </Text>
        <TextInput
          placeholder="221345"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            width: "100%",
            height: 40,
            borderRadius: 20,
          }}
          onChangeText={(text) => setOtpNo(text)}
          value={otpNo}
          maxLength={6}
          textAlign={"center"}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetails")}
        style={{
          backgroundColor: "#fccc3c",
          padding: 10,
          margin: 2,
          width: "80%",
          position: "absolute",
          bottom: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ textAlign: "center" }}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpComp;

const styles = StyleSheet.create({});
