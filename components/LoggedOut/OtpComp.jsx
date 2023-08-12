import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const OtpComp = ({ navigation }) => {
  return (
    <View>
      <Text>OtpComp</Text>
      <TouchableOpacity onPress={() => navigation.navigate("UserDetails")}>
        <Text>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpComp;

const styles = StyleSheet.create({});
