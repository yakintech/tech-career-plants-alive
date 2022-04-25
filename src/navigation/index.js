import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './bottomTabNav';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            component={BottomTabNav}
            name="HomeTabs"
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>


  );
};

export default Router;