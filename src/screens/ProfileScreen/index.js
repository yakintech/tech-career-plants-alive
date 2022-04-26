import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserStorage, setUserToStorage } from '../../helper/StorageHelper'


const ProfileScreen = ({ navigation }) => {

  const [loginStatus, setLoginStatus] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    
    getUserStorage().then((res) => {
      if(res == null){
        setLoginStatus(false);
      }
      else{
        setLoginStatus(true);
        setEmail(res.email)
      }
    })

  }, [])

  const signOut = () => {
    setUserToStorage(null).then(() => {
      alert("Çıkış işleminiz başarılı")
      navigation.navigate("home")
    })
  }

  return (
    <>
      {
        loginStatus == false ? <View>
          <Button title='Login'></Button>
          <Text>Or</Text>
          <Button title='Sign Up' onPress={() => navigation.navigate("Register")}></Button>
        </View> : <>
        <Text>Welcome {email} </Text>
        <Button onPress={() => signOut()} title='Sign Out'></Button>
        </>
      }
    </>


  )
}



export default ProfileScreen