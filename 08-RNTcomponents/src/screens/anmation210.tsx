import React, { useRef } from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { backGroundColor } from '../theme/appTheme';

export const Anmation210 = () => {
  
   const dragValues = useRef(new Animated.ValueXY({x:0 ,  y:0})).current;
   
   const ActiveDrag = PanResponder.create({
     onStartShouldSetPanResponder: () => true,
     onPanResponderMove: Animated.event([
       null,
       {
         dx: dragValues.x,
         dy: dragValues.y,
       },
     ],{ useNativeDriver:false}),
     onPanResponderRelease: () => {
       Animated.spring(
          dragValues,
          {
            toValue:{ x:0,  y:0},
            useNativeDriver:false
          }
       ).start(); 
     }
   });
  

  return (
        <View style={styles.container}>
               
          <Animated.View
          {...ActiveDrag.panHandlers} 
          style={[
            dragValues.getLayout(),
            styles.boxBlue,
          ]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }, 
    boxBlue:{
          width:150,
          height:150,
          backgroundColor:backGroundColor.thr
     }
});

