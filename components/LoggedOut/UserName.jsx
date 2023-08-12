import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const UserName = ({ handleLogin }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text>UserName</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({});
