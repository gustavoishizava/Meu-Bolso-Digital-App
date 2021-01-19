import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';

export default () => {

    const navigation = useNavigation();

    React.useEffect(() => {
        const checkToken = async () => {
            navigation.reset({
                routes:[{name: 'MainTab'}]
            })
        }

        checkToken();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ActivityIndicator color="#FFF" size="large" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#63c2d1',
        justifyContent: 'center',
        alignItems: 'center'
    }
});