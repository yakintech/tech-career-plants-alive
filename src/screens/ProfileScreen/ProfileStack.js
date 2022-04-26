import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '.';
import RegisterScreen from './RegisterScreen';
import RegisterCodeConfirm from './RegisterCodeConfirm';

const ProfilePageStack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <ProfilePageStack.Navigator>
            <ProfilePageStack.Screen name="Profile" component={ProfileScreen} />
            <ProfilePageStack.Screen name="Register" component={RegisterScreen} />
            <ProfilePageStack.Screen name="RegisterCodeConfirm" component={RegisterCodeConfirm} />
        </ProfilePageStack.Navigator>
    )
}

export default ProfileStack
