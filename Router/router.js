
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../Component/LandingPage';
import HomePage from '../Component/HomePage';
import NormalWorkout from '../Component/NormalWorkout';
import DaywiseWorkout from '../Component/DaywiseWorkout';

const Stack = createStackNavigator();

export const LandingStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Landing" component={LandingPage} />
        </Stack.Navigator>
    )
}

export const MainStack = () => {
    return (

        <Stack.Navigator headerMode="none" initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="NormalWorkout" component={NormalWorkout} />
            <Stack.Screen name="DaywiseWorkout" component={DaywiseWorkout} />

        </Stack.Navigator>

    );
}

