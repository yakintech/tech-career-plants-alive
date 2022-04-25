import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PlantsScreen from '../screens/PlantsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'search':
            iconName = focused ? 'search' : 'search-outline';
            break;
          case 'leaf':
            iconName = focused ? 'leaf' : 'leaf-outline';
            break;
          case 'profile':
            iconName = focused ? 'user' : 'user-o';
            return <FontAwesome name={iconName} size={size} color={color} />;
          default:
            break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#448014',
      tabBarInactiveTintColor: '#32502E',
      tabBarShowLabel: false,
      headerShown: false
    })} >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="leaf" component={PlantsScreen} />
      <Tab.Screen name="search" component={SearchScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNav;