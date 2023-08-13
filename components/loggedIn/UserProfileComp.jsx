import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import SingleCrime from "./SingleCrime";
import { crimes } from "./CrimeFeedComp";

const UserProfileComp = ({ handleLogout }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        margin: 20,
        paddingTop: 20,
      }}
    >
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        }}
        style={{ height: 100, width: 100, borderRadius: 100 }}
      ></Image>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: 700 }}>User: #99855D</Text>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#4c4c4c",
          padding: 10,
          marginBottom: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>

      <ScrollView>
        {crimes.map((crime, index) => {
          return <SingleCrime crime={crime} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileComp;

const styles = StyleSheet.create({});
