import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/topTabsScreens/ChatScreen';
import { ContacScreen } from '../screens/topTabsScreens/ContacScreen';
import { AlbumScreen } from '../screens/topTabsScreens/AlbumScreen';
import { colors } from '../themes/appTheme';


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
                  icon='albums-outline'
              break;
              case'ChatScreen': 
                  icon='chatbox-outline'
              break;
              case'ContacScreen':
                  icon='people-outline' 
              break;
            }
            return <Icon  name={icon} size = {20}  color = {colors.six}/>
         }
     })}
    >
      <TopTab.Screen name="ChatScreen" component={ChatScreen} />
      <TopTab.Screen name="ContacScreen" component={ContacScreen} />
      <TopTab.Screen name="AlbumScreen" component={AlbumScreen} />
    </TopTab.Navigator>
  );
}