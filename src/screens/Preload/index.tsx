import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {

    const navigation = useNavigation();

    React.useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
                // TODO: PEGAR UM NOVO TOKEN
                // ALTERAR ELE NO ASYNCSTORAGE
                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });
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