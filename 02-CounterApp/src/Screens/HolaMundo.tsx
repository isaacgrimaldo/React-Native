import React from 'react';
import { View, Text } from 'react-native';

 export const HolaMundoScreen = () => {
  return (
     <View style={{
         flex:1,
         backgroundColor:'#000',
         justifyContent:'center'
     }}>
        <Text style={{
          fontSize:45,
          textAlign:'center',
          color:'#fff'
        }}>
          HOLA MUNDO
        </Text>
     </View>
  )
}

