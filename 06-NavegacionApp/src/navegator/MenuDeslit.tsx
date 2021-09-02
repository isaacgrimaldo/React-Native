import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavegator, RootStackParams } from './StackNavegator';
import { SettingScreen } from './SettingScreen';

const Drawer = createDrawerNavigator();

export type RootDrawParams ={
    StackNavegator:RootStackParams;
    SettingScreen : { id:number , name:string}
}

export const MenuDeslit = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavegator" component={StackNavegator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}