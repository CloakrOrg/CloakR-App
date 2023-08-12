import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const TipCrimeComp = ({ navigation }) => {
  return (
    <View>
      <Text>TipCrimeComp</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TipCrimeComp;

const styles = StyleSheet.create({});
