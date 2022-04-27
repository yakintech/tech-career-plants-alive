import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const CameraScreen = () => {
    const devices = useCameraDevices()
    const device = devices.back
  
    if (device == null) return <Text>loading...</Text>
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
}

export default CameraScreen
