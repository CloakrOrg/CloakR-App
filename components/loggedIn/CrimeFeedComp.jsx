import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CrimeFeedComp = ({ navigation }) => {
  return (
    <View>
      <Text>CrimeFeedComp</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ViewSingleCrime")}>
        <Text>View Single Crime</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrimeFeedComp;

const styles = StyleSheet.create({});
