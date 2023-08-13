import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";

const UserDetailsComp = ({ navigation, handleLogin }) => {
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
        style={{ height: 32, width: 120 }}
      ></Image>

      <View
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 400,
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          borderColor: "#fccc3c",
        }}
      >
        <Text
          style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}
        >
          Aadhar: 8865 8510 4865
        </Text>
        <Text
          style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}
        >
          Name: Rajdeep Ghosh
        </Text>
        <Text
          style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}
        >
          Phone: +91 9876543210
        </Text>
        <Text
          style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}
        >
          State: West Bengal
        </Text>
        <Text
          style={{ alignSelf: "flex-start", fontSize: 15, marginBottom: 8 }}
        >
          Name: Rajdeep Ghosh
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleLogin}
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
        <Text style={{ textAlign: "center" }}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserDetailsComp;

const styles = StyleSheet.create({});
