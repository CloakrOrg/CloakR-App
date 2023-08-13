import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

const ViewSingleCrimeComp = ({ navigation }) => {
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
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
            }}
            style={{ height: 50, width: 50, borderRadius: 100 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{
            uri: "https://cdn.britannica.com/43/102643-050-3ABC1916/Police-officer-fingerprints.jpg",
          }}
          style={{ width: 350, height: 200, borderRadius: 20, marginTop: 20 }}
        ></Image>
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "800" }}>
          A Man Died By Murder
        </Text>
        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("TipCrime")}
        style={{
          backgroundColor: "#fccc3c",
          padding: 5,
          width: "100%",
          borderRadius: 10,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 40,
        }}
      >
        <Text>Tip this Crime</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ViewSingleCrimeComp;

const styles = StyleSheet.create({});
