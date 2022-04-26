import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Button title='Login'></Button>
      <Text>Or</Text>
      <Button title='Sign Up' onPress={() => navigation.navigate("Register")}></Button>
    </View>
  )
}



export default ProfileScreen