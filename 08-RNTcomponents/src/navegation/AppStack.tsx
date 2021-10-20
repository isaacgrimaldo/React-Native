import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/Home'
import { backGroundColor, textColor, stylesGlobal } from '../theme/appTheme';
import { Anmation010 } from '../screens/anmation010';
import { Anmation210 } from '../screens/anmation210';
import { Anmation510 } from '../screens/anmation510';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';

export type RootStackParams = {
    Home: undefined;
    AlertScreen:undefined;
    anmation010: undefined;
    anmation210: undefined;
    anmation510: undefined;
    swichtS: undefined;
} 

const Stack = createStackNavigator<RootStackParams>();

export const  AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{backgroundColor:backGroundColor.two},
        headerBackgroundContainerStyle:{backgroundColor:backGroundColor.sev}, 
        headerStyle:{backgroundColor:textColor.two }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AlertScreen" component={AlertScreen}/>
      <Stack.Screen name="anmation010" component={Anmation010}/>
      <Stack.Screen name="anmation210" component={Anmation210}/>
      <Stack.Screen name="anmation510" component={Anmation510}/>
      <Stack.Screen name='swichtS' component={SwitchScreen} />
    </Stack.Navigator>
  );
}

