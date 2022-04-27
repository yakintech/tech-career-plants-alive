import { View, Text } from 'react-native'
import React, { useState } from 'react'
 import { getBatteryLevel, getDeviceId, getDeviceName } from 'react-native-device-info'

const HomeScreen = () => {

  const [batteryLevel, setBatteryLevel] = useState(0)
  const [deviceName, setDeviceName] = useState('');
  const [deviceId, setDeviceId] = useState('')
  

  getBatteryLevel().then((res) => {
      setBatteryLevel(res)
  })

  getDeviceName().then((res) => {
      setDeviceName(res)
  })

  let deviceId2= getDeviceId();

  console.log(deviceId2);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>HomeScreen</Text>
      <Text>Battery Level:{batteryLevel} </Text>
      <Text>Device Name:{deviceName} </Text>
      <Text>Device Id:{batteryLevel} </Text>

    </View>
  )
}

export default HomeScreen