import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const UserName = ({handleLogin}) => {
  return (
    <View>
      <Text>UserName</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({});
