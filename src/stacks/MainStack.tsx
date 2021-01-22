import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator inititalRouteName="Preload" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);