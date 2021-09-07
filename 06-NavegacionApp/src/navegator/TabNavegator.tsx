import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';

import { StackNavegator } from './StackNavegator';
import { Tab1Screen } from '../screens/tabsScreen/Tab1Screen ';
import { Tab2Screen } from '../screens/tabsScreen/Tab2Screen';
// import { Tab3Screen } from '../screens/tabsScreen/Tab3Screen';
import { colors, styles } from '../themes/appTheme';
import { TopTabNavegator } from './TopTabNavegator';

type RootTabParams = {
  Tab1Screen : undefined;
  Tab2Screen : undefined;
  Stack : undefined;
};



export const TabNavegator = () => {
     
   return ( Platform.OS === 'macos')
  ?  <TabsNavegatorISO />
  :  <TabsNavegatorAndroid />
  
}

const BottomTabsAndroid = createMaterialBottomTabNavigator<RootTabParams>();


 const TabsNavegatorAndroid = () => {

  const { top} =  useSafeAreaInsets()

  return (
    <BottomTabsAndroid.Navigator

    barStyle= {{
      backgroundColor:colors.six,
    }} 
    safeAreaInsets = {{
     top
    }}
    screenOptions={({route}) =>({
      tabBarLabelStyle:{
         fontSize:15,
      },
      headerShown:false,
      tabBarStyle:{
        borderTopColor:colors.ter,
        backgroundColor:colors.six,
        elevation:0
      },
      tabBarActiveTintColor:colors.fur,
      headerStyle:{
        backgroundColor:'#0F0E0A'
      },
      tabBarIcon:({color}) => {
          
        let icon:any='';
  
        switch(route.name){
          case'Tab1Screen': 
              icon= <Icon name='logo-facebook' size= {20} color={'white'} />
          break;
          case'Tab2Screen': 
              icon=<Icon name='logo-youtube' size= {25} color={'white'} />
          break;
          case'Stack':
              icon = <Icon name='logo-nodejs' size= {30} color={'white'} />
          break;
        }
        return <Text style ={{color , margin:10}}>{icon}</Text>
      },
    })}
    >
      <BottomTabsAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabsAndroid.Screen name="Tab2Screen" component={TopTabNavegator} />
      <BottomTabsAndroid.Screen name="Stack" component={StackNavegator} />
    </BottomTabsAndroid.Navigator>
  );
 }



const BottomTabsISO = createBottomTabNavigator <RootTabParams>();

const TabsNavegatorISO = () => {

  const { top} =  useSafeAreaInsets()
  
  return (
    <BottomTabsISO.Navigator
       sceneContainerStyle= {{
          backgroundColor:colors.fur,
       }}
       safeAreaInsets = {{
         top:top
        }}
        screenOptions={({route}) =>({
          tabBarLabelStyle:{
             fontSize:15,
             color:'white'
          },
          headerShown:false,
          tabBarStyle:{
            borderTopColor:colors.ter,
            backgroundColor:colors.six,
            elevation:0
          },
          tabBarActiveTintColor:colors.fur,
          headerStyle:{
            backgroundColor:'#0F0E0A'
          },
          tabBarIcon:({color}) => {
              
            let icon:any='';
      
            switch(route.name){
              case'Tab1Screen': 
                  icon= <Icon name='logo-facebook' size= {10} color={colors.fur} />
              break;
              case'Tab2Screen': 
                  icon='T1'
              break;
              case'Stack':
                  icon='ST' 
              break;
            }
            return <Text style ={{color}}>{icon}</Text>
          }
        })}
        
    >
      <BottomTabsISO.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabsISO.Screen name="Tab2Screen" component={TopTabNavegator } />
      <BottomTabsISO.Screen name="Stack" component={StackNavegator} />
    </BottomTabsISO.Navigator>
  );
}