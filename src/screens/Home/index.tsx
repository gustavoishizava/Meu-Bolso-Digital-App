import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import {clearToken} from '../../services/AuthService';

export default () => {  
    
    const navigation = useNavigation();

    const logOut = async () => {
        await clearToken();
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <View>
            <Text>
                Tela de Home
            </Text>
            <TouchableOpacity onPress={logOut}>
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
    );
}