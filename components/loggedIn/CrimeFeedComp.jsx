import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import SingleCrime from "./SingleCrime";

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

export const crimes = [
  {
    title: "Mysterious Disappearance of Local Man",
    location: "Winstonville, Greene County",
    reward: "$1000",
    verified: true,
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Rare Antique Painting Stolen from Museum",
    location: "Eldridge City, Westdale",
    reward: "€ 20000",
    verified: false,
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Suspicious Fire Destroys Historic Landmark",
    location: "Crimsonville, Hemlock County",
    reward: "$5000",
    verified: true,
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Elderly Woman Missing, Family Seeks Help",
    location: "Willowbrook, Fairfield Parish",
    reward: "£ 300",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Famous Racehorse Kidnapped from Stable",
    location: "Silverton, Marigold County",
    reward: "$15000",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Mysterious Disappearance of Local Man",
    location: "Winstonville, Greene County",
    reward: "$1000",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Rare Antique Painting Stolen from Museum",
    location: "Eldridge City, Westdale",
    reward: "€ 20000",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Suspicious Fire Destroys Historic Landmark",
    location: "Crimsonville, Hemlock County",
    reward: "$5000",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Elderly Woman Missing, Family Seeks Help",
    location: "Willowbrook, Fairfield Parish",
    reward: "£ 300",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
  {
    title: "Famous Racehorse Kidnapped from Stable",
    location: "Silverton, Marigold County",
    reward: "$15000",
    image:
      "https://static.tnn.in/photo/msid-97095168,width-100,height-200,resizemode-75/97095168.jpg",
  },
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
          marginBottom: 20,
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
              borderColor: "#fccc3c",
              borderWidth: 1,
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
        <TouchableOpacity onPress={()=>navigation.navigate("ProfilePage")}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
            }}
            style={{ height: 50, width: 50, borderRadius: 100 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {crimes.map((crime, index) => {
          return (
            <SingleCrime crime={crime} navigation={navigation} key={index} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CrimeFeedComp;

const styles = StyleSheet.create({});

function singleCrime({ navigation, crime }) {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 20,
        backgroundColor: "#fccc3c",
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
        <Text style={{ fontSize: 15 }}>{crime?.title}</Text>
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
