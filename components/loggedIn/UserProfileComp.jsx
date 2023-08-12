import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const UserProfileComp = ({handleLogout}) => {
  return (
    <View>
      <Text>UserProfileComp</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileComp;

const styles = StyleSheet.create({});
