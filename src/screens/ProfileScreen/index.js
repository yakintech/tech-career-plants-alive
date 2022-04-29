import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserStorage, setUserToStorage } from '../../helper/StorageHelper'


const ProfileScreen = ({ navigation }) => {

  const [loginStatus, setLoginStatus] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {

    getUserStorage().then((res) => {
      if (res == null) {
        setLoginStatus(false);
      }
      else {
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
      <Image
        source={require('../../../assets/data/img/logo.png')}
        style={styles.logo}
      >
      </Image>
      {
        loginStatus == false ? <View style={styles.index}>

          <Button title='Login' color="#04541d" ></Button>
          <Text></Text>
          <Button
            title='Sign Up'
            onPress={() => navigation.navigate("Register")}
            color='#04541d'
          ></Button>
        </View> : <>
          <Text>Welcome {email} </Text>
          <Button onPress={() => signOut()} title='Sign Out'></Button>
        </>
      }
    </>
  )
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: '#fff4de',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: 400,
    height: 250,
  },
});

export default ProfileScreen
