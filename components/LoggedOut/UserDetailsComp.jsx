import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";

const UserDetailsComp = ({ navigation, handleLogin }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 800 }}>Aadhar Details</Text>
      <View style={{ marginTop: 20 }}>
        <Text>Name: Rajdeep Ghosh</Text>
        <Text>Phone: +91 8240336721</Text>
        <Text>State: West Bengal</Text>
        <Text>Aadhar No: 886585104865</Text>
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#FFA500",
          padding: 10,
          margin: 2,
          width: "80%",
          position: "absolute",
          bottom: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ textAlign: "center" }}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserDetailsComp;

const styles = StyleSheet.create({});
