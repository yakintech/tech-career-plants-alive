import { View, Text, TextInput, FlatList, StyleSheet, Image,ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Plants from "../../../assets/data/plants";
import PlantItem from "../../components/PlantItem";

const PlantsScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(Plants);
  useEffect (() => {
    if(searchText === '') {
      setList(Plants);
    }
    else{
      setList(
        Plants.filter(item => {
          if(item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
           return true;
          }
          else {
            return false;
          }
        })
      )
    }
  },[searchText]);


  return (
    <View
      style={{ paddingHorizontal: 20, paddingVertical: 10, marginVertical: 10 }}
    >
      <Text style={{ fontSize: 30, fontWeight: "500", color: "#32502E" }}>
        My Plants
      </Text>
      <View style={styles.searchContainer}>
      <Image  style={styles.searchIcon} source={require('../../../assets/data/img/search.png')} />
      <TextInput style={styles.textInput} placeholder="Search.." value={searchText} onChangeText={(t) => setSearchText(t)}></TextInput>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlantItem plant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor:'#fff',
    height:40,
    flexDirection:'row',
    borderRadius: 12,
    marginTop: 10,
    

  },
  textInput: {
    width: '100%',
    marginLeft: 5,
  },
  searchIcon: {
    width: 20,
    height:20,
    marginTop: 10,
    marginLeft: 10,
    opacity: 0.5,

  }
});

export default PlantsScreen;
