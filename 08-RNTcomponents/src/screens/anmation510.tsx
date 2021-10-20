import React from 'react'
import { View, StyleSheet } from 'react-native';
import { backGroundColor } from '../theme/appTheme';

export const Anmation510 = () => {
    return (
        <View style={styles.container}>
          <View style={styles.boxcGreen}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }, 
    boxcGreen:{
          width:150,
          height:150,
          backgroundColor:backGroundColor.one
     }
});

