import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const TipCrimeComp = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
      <Text style={{ fontSize: 20, fontWeight: 800, paddingTop: 20 }}>
        {" "}
        Crime #99832
      </Text>
      <View style={{ paddingTop: 30 }}>
        <View style={{ marginBottom: 10 }}>
          <Text>Supporting text message</Text>
          <TextInput
            numberOfLines={4}
            placeholder="This is demo message tip for crime #99832."
            style={{
              // width: "100%",
              height: 100,
              backgroundColor: "lightgrey",
              borderRadius: 10,
              marginTop: 10,
              padding: 10,
            }}
            multiline={true}
          ></TextInput>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingBottom: 10 }}>Upload Supporting Image</Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 10,
              backgroundColor: "lightgrey",
              height: 200,
              width: 200,
            }}
          >
            <TouchableOpacity
              // title="Pick an image from camera roll"
              onPress={pickImage}
              style={{ paddingTop: 10 }}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                />
              ) : (
                <Text>Upload Image</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfilePage")}
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

export default TipCrimeComp;

const styles = StyleSheet.create({});
