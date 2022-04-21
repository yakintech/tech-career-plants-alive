import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import baseManager from './src/api/baseManager'
import baseManagerWithAxios from './src/api/baseManagerWithAxios'

const App = () => {


  useEffect(() => {

    baseManagerWithAxios.getAll("/products")
    .then((data) => {
      //console.log("products", data);
    })


    baseManagerWithAxios.getEntityById("/categories",2)
    .then((data) => {
      console.log("categoryEntity", data);
    })

    // baseManager.getAll("/products")
    //   .then((data) => {
    //     console.log("products", data);
    //   })

    // baseManager.getEntityById("/categories", 2)
    // .then((data) => {
    //   console.log("Category", data);
    // })



  }, [])


  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default App
