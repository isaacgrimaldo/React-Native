import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavegator, RootStackParams } from './StackNavegator';
import { SettingScreen } from '../screens/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export type RootDrawParams ={
    StackNavegator:RootStackParams;
    SettingScreen : { id:number , name:string}
}

export const MenuDeslit = () => {
  
 const { width } =  useWindowDimensions();

  console.log(width);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType:(width >= 720 )?'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="StackNavegator" component={StackNavegator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}