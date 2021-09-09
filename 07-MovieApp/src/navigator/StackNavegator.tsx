import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import { DetailScreen } from '../screen/DetailScreen';

export type RootStackNavegator = {
    HomeScreen: undefined;
    DetailScreen:undefined;
}

const Stack =  createStackNavigator<RootStackNavegator>()

export const StackNavegator = () => {
    return (
        <Stack.Navigator
          screenOptions = {{
              headerShown:false,
              
          }}
        >
             <Stack.Screen name='HomeScreen'component = {HomeScreen} />
             <Stack.Screen name='DetailScreen'component = {DetailScreen} />
        </Stack.Navigator>
    )
}
