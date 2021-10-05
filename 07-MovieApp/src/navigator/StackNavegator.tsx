import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen';
import { DetailScreen } from '../screen/DetailScreen';
import { Movies } from '../interfaces/interfaces';

export type RootStackNavegator = {
    HomeScreen: undefined;
    DetailScreen:Movies;
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
