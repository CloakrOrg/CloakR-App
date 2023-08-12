import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AadharComp = ({navigation}) => {
  return (
    <View>
      <Text>AadharComp</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("OtpPage")}><Text>Send OTP</Text></TouchableOpacity>
    </View>
  );
};

export default AadharComp;

const styles = StyleSheet.create({});
