import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const UserName = ({ handleLogin }) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text></Text>
      {isNewUser ? <Text>Enter your name</Text> : <Text>Welcome back Helio@K</Text>}
      <TouchableOpacity onPress={handleLogin}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({});
