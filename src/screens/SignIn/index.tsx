import React from 'react';

import { styles } from './styles';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { Controller, useForm } from 'react-hook-form';

import { signIn } from '../../services/API/ApiAuthentication';
import LoginRequest from '../../models/requests/LoginRequest';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();
    const { control, handleSubmit, errors } = useForm();

    const onSubmit = async (data: LoginRequest) => {
        const response = await signIn(data);
        console.log(response);
        if(response === null){
            alert('Email e/ou senha incorretos');
        }else{
            await AsyncStorage.setItem('token', response.accessToken);
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            });
        }
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.forgotPasswordView}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.forgotPasswordText}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formView}>
                <Text style={styles.formTitle}>
                    Bem vindo de volta!
                </Text>

                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    defaultValue="admin@admin.com"
                    render={({ onChange, value }) => (
                        <TextInput
                            style={styles.formInput}
                            placeholder='Email'
                            placeholderTextColor='#5a5a5e'
                            selectionColor='#3375bc'
                            textContentType={'username'}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    defaultValue="102030"
                    render={({ onChange, value }) => (
                        <TextInput
                            style={styles.formInput}
                            placeholder='Senha'
                            placeholderTextColor='#5a5a5e'
                            selectionColor='#3375bc'
                            returnKeyType={'go'}
                            textContentType={'password'}
                            secureTextEntry={true}
                            value={value}
                            onChangeText={value => onChange(value)}
                        />
                    )}
                />

                <View style={styles.formButtonview}>
                    <TouchableOpacity style={styles.formButton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.formButtonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}




