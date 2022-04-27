import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import baseManager from './src/api/baseManager'
import baseManagerWithAxios from './src/api/baseManagerWithAxios'
import Router from './src/navigation/index';

const App = () => {



  useEffect(() => {
    
  }, []);




  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [])

  // useEffect(() => {

  //   baseManagerWithAxios.getAll("/products")
  //   .then((data) => {
  //     //console.log("products", data);
  //   })


  //   baseManagerWithAxios.getEntityById("/categories",2)
  //   .then((data) => {
  //     console.log("categoryEntity", data);
  //   })

  //   // baseManager.getAll("/products")
  //   //   .then((data) => {
  //   //     console.log("products", data);
  //   //   })

  //   // baseManager.getEntityById("/categories", 2)
  //   // .then((data) => {
  //   //   console.log("Category", data);
  //   // })
  // }, [])

  return (
    <View style={{ flex: 1 }}>
      <Router />
    </View>
  )
}

export default App
