import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const UserDetailsComp = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text>UserDetailsComp</Text>
      <TouchableOpacity onPress={() => navigation.navigate("UserNamePage")}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetailsComp;

const styles = StyleSheet.create({});
