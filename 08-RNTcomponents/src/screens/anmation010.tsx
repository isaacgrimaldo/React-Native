import React from 'react'
import { Animated, Button, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { textColor } from '../theme/appTheme';
import { useAnimation } from '../hooks/useAnimation';


export const Anmation010 = () => {
    
   const {opacity , fadeType  , fadeIn ,  fadeOut} = useAnimation({type:'left'});
    
        return (
    <View style={styles.container}>
        <Animated.View style={{
          ...styles.boxRed,
            opacity, 
            transform:[{
              translateX:fadeType
            }]
          }}>
        </Animated.View>

          <View style={{marginVertical:10}}> 
            <Button
                title="fade in"
                onPress={fadeIn}
            />
          </View>
      
      
          <View style={{marginVertical:10}}> 
            <Button
                title="fade out"
                onPress={fadeOut}
            />
          </View>
           
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }, 
    boxRed:{
          width:150,
          height:150,
          backgroundColor:textColor.one
     }
});
