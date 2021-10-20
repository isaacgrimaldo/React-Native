import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal} from '../../theme/appTheme';

export interface Item {
    name: string,
    icon: string
    component:string
}

interface TitleProps {
     title:string;
}

export const HeaderMenuItem = ({ title }:TitleProps) => {
   return(
       <View>   
           <Text style={stylesGlobal.titleApp}>{title}</Text>
       </View>
   )
} 

export const SeparatorItem = () => {
 return(
      <View style={{
          marginHorizontal:20, 
          marginVertical:5,
          height:2,
          backgroundColor:'gray'
          }}>
      </View>
 )
}
