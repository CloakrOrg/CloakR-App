import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const UserDetailsComp = ({navigation}) => {
  return (
    <View>
      <Text>UserDetailsComp</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("UserNamePage")}><Text>Confirm</Text></TouchableOpacity>
    </View>
  )
}

export default UserDetailsComp

const styles = StyleSheet.create({})