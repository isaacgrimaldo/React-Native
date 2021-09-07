import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/topTabsScreens/ChatScreen';
import { ContacScreen } from '../screens/topTabsScreens/ContacScreen';
import { AlbumScreen } from '../screens/topTabsScreens/AlbumScreen';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';

type RootTopTabParams = {
    ChatScreen: undefined;
    ContacScreen: undefined;
    AlbumScreen: undefined;
}

const TopTab = createMaterialTopTabNavigator<RootTopTabParams>();

export const TopTabNavegator = () =>  {
  return (
    <TopTab.Navigator 
     screenOptions={({route}) => ({
         tabBarStyle:{
             backgroundColor:colors.fur,
             marginBottom:10,
             borderBottomWidth:5,
             padding:5,
             
         },
         tabBarLabelStyle:{
             fontSize:12,
             color:'white'
         },
         tabBarPressColor: colors.six,
         tabBarIcon:({color, focused}) => {
            let icon:string='';
      
            switch(route.name){
              case'AlbumScreen': 
                  icon='Albu'
              break;
              case'ChatScreen': 
                  icon='Cha'
              break;
              case'ContacScreen':
                  icon='Con' 
              break;
            }
            return <Text style ={{color}}>{icon}</Text>
         }
     })}
    >
      <TopTab.Screen name="ChatScreen" component={ChatScreen} />
      <TopTab.Screen name="ContacScreen" component={ContacScreen} />
      <TopTab.Screen name="AlbumScreen" component={AlbumScreen} />
    </TopTab.Navigator>
  );
}