import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const SingleCrime = ({ navigation, crime }) => {
  const title = crime?.title;
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 25,
        marginRight: 10,
        borderColor: "#fccc3c",
        borderWidth: 1,
      }}
      onPress={() => navigation?.navigate("ViewSingleCrime")}
    >
      <Image
        source={{
          uri: crime?.image,
        }}
        style={{
          width: 70,
          height: "100%",
          borderRadius: 5,
          marginRight: 15,
          borderWidth: 3,
          //   borderColor: "yellow",
        }}
      ></Image>
      <View style={{ display: "flex" }}>
        <Text style={{ fontSize: 15 }}>{title.slice(0, 24)}</Text>
        <Text style={{ fontSize: 12, fontWeight: "400" }}>
          {crime?.location}
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 700 }}>{crime?.reward}</Text>
          <View style={{ paddingLeft: 10 }}>
            {crime?.verified ? (
              <Text style={{ fontWeight: 700, color: "green" }}>Verified</Text>
            ) : (
              <Text style={{ color: "red", fontWeight: 700 }}>Unverified</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleCrime;

const styles = StyleSheet.create({});
