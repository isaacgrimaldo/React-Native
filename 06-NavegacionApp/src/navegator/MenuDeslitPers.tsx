import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import {  RootStackParams } from './StackNavegator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles, colors } from '../themes/appTheme';
// import { createStackNavigator } from '@react-navigation/stack';
import { TabNavegator } from './TabNavegator';
import { AuthContext } from '../context/AuthContex';


const Drawer = createDrawerNavigator();

export type RootDrawParams ={
    StackNavegator:RootStackParams;
    SettingScreen : { id:number , name:string}
}

export const MenuDeslitPers = () => {
  
 const { width } =  useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType:(width >= 720 )?'permanent' : 'front',
      }}
      drawerContent = { (props) =>  <MenuContent { ...props} /> }
      initialRouteName = 'SettingScreen'
    >
      <Drawer.Screen name="TabsNavetor" component={TabNavegator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}



const MenuContent = ( { navigation }:DrawerContentComponentProps) => {
   
  const {authState:{userName}} = useContext(AuthContext);
  
  return(
     <DrawerContentScrollView style = { styles.menuContainer  } >
        <View style = { styles.avataImgContent}>
           <Image
              source = {{
                uri:'https://1p6mrc269jq133xbrt414zvc-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/placeholder-user-image.jpg'
              }}
              style = { styles.avataImg }
           />
            {
               (userName !== 'not-userName' && userName ) &&(
                  <Text style ={styles.textTitle}> Usuario: {userName} </Text>
               )
            }
        </View>

          <View style= { styles.menuLinksContainer }>
              <TouchableOpacity  
                style = { styles.linkButton}
                onPress = { () => navigation.navigate('TabsNavetor')}
                >
                  <Text style = { styles.linkText } >
                    <Icon name="home-outline" size={30} color={colors.fur} /> Home
                  </Text>
              </TouchableOpacity>
                  
              <TouchableOpacity 
                style = {styles.linkButton } 
                onPress = { () => navigation.navigate('SettingScreen')}
                >
                  <Text style = { styles.linkText } >
                    <Icon name="settings-outline" size={30} color={colors.fur} /> Settings
                  </Text>
              </TouchableOpacity>  
          </View>

     </DrawerContentScrollView>
  )
}