import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Plants from '../../../assets/data/plants';
import PlantItem from '../../components/PlantItem';

const PlantsScreen = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10, marginVertical: 10}}>
      <Text style={{fontSize: 30, fontWeight: '500', color: '#32502E'}}>My Plants</Text>
      <FlatList data={Plants} renderItem={({item}) => <PlantItem plant={item}/>} />
    </View>
  )
}

export default PlantsScreen;