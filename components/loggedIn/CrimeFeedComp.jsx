import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const states = [
  "AN",
  "AP",
  "AR",
  "AS",
  "BR",
  "CH",
  "CT",
  "DNDD",
  "DL",
  "GA",
  "GJ",
  "HR",
  "HP",
  "JK",
  "JH",
  "KA",
  "KL",
  "LA",
  "LD",
  "MP",
  "MH",
  "MN",
  "ML",
  "MZ",
  "NL",
  "OD",
  "PY",
  "PB",
  "RJ",
  "SK",
  "TN",
  "TG",
  "TR",
  "UP",
  "UK",
  "WB",
];

const CrimeFeedComp = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        margin: 20,
        marginTop: 50,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: 27, width: 100, marginRight: 10 }}
          ></Image>
          <SelectDropdown
            data={states}
            buttonStyle={{
              borderRadius: 15,
              width: 80,
              height: 40,
            }}
            defaultValueByIndex={35}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
          }}
          style={{ height: 50, width: 50, borderRadius: 100 }}
        ></Image>
      </View>
      {/* render this below component 10 times */}
      {singleCrime(navigation)}
      {singleCrime(navigation)}
      {singleCrime(navigation)}
      {singleCrime(navigation)}
      {singleCrime(navigation)}
    </SafeAreaView>
  );
};

export default CrimeFeedComp;

const styles = StyleSheet.create({});

function singleCrime(navigation) {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-center",
        alignItems: "flex-center",
        width: "100%",
        marginTop: 20,
        backgroundColor: "#FFA500",
        borderRadius: 15,
        padding: 25,
      }}
      onPress={() => navigation.navigate("ViewSingleCrime")}
    >
      <Image
        source={{
          uri: "https://www.livelaw.in/h-upload/images/1600x960_juvenile-offender-min.jpg",
        }}
        style={{
          width: 70,
          height: "100%",
          borderRadius: 15,
          marginRight: 15,
          borderWidth: 3,
          borderColor: "yellow",
        }}
      ></Image>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>
          Teenager 14, murdered ..
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "400" }}>Kalyanni, Nadia</Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text>₹ 500</Text>
      </View>
    </TouchableOpacity>
  );
}
