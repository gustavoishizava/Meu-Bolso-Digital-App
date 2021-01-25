import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {refreshTokenAsync} from '../../services/API/ApiAuthentication';
import { getToken, setToken, renew } from '../../services/AuthService';

export default () => {

    const navigation = useNavigation();


    React.useEffect(() => {
        const checkToken = async () => {
            const token = await getToken();
            if (token !== null) {
                if(await renew()){
                    const response = await refreshTokenAsync({refreshToken: token.refreshToken});
                    if(!response.succeeded){
                        navigation.navigate('SignIn');                    
                    }else{
                        await setToken(response.data);
                        navigation.reset({
                            routes: [{ name: 'MainTab' }]
                        });
                    }
                }else{
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                }                                
            } else {
                navigation.navigate('SignIn');
            }
        }

        checkToken();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ActivityIndicator color="#3375bc" size="large" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#1c1c1e',
        justifyContent: 'center',
        alignItems: 'center'
    }
});