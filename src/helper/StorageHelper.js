import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserToStorage = async (user) => {
        const jsonValue = JSON.stringify(user)
        await AsyncStorage.setItem('user', jsonValue)
}


export const getUserStorage = async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}