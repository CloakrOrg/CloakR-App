import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ViewSingleCrimeComp = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text>ViewSingleCrimeComp</Text>
      <TouchableOpacity onPress={() => navigation.navigate("TipCrime")}>
        <Text>Tip this crime</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewSingleCrimeComp;

const styles = StyleSheet.create({});
