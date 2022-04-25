import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlantItem = ({plant}) => {
  return (
    <View style={styles.row}>
        <Image style={styles.image} source={{uri: plant.image}}/>
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>{plant.name}</Text>
          <Text style={styles.scientificName}>{plant.scientificName}</Text>
          <View style={styles.iconContainer}>
            <View style={styles.plantInfo}>
                <MaterialCommunityIcons name='watering-can' size={20} color='#d1d1d1'/>
                <Text style={styles.infoText}>{plant.upcomingWateringDay}</Text>
            </View>
            <View style={[styles.plantInfo, {marginLeft: 10}]}>
                <MaterialCommunityIcons name='flower-poppy' size={20} color='#d1d1d1'/>
                <Text style={styles.infoText}>{plant.condition}</Text>
            </View>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    row: { 
        flexDirection: 'row', 
        marginTop: 20 
    },
    image: {
        width: 100, 
        height: 100, 
        borderRadius: 10, 
        borderWidth: 2, 
        borderColor: '#32502E',
    },
    name: {
        fontSize: 18, 
        color: '#000'
    },
    scientificName: {
        fontSize: 16, 
        color: 'grey'
    },
    iconContainer: {
        flexDirection: 'row', 
        marginTop: 'auto',
    },
    plantInfo: {
        flexDirection: 'row',
        borderWidth: 2, 
        borderRadius: 10, 
        borderColor: '#32502E', 
        backgroundColor: '#32502E', 
        padding: 6
    },
    infoText: {
        color: '#fff',
        marginLeft: 3
    }
});

export default PlantItem