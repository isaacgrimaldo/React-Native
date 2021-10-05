import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { colors } from './appTheme';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

     const {opacity ,  fadeIn ,  fadeOut} = useFade();

    return (
        <View  style ={{ flex:1}}>
              <View style ={{ 
                  flex:1,
                  backgroundColor:'gray',
                  justifyContent:'center',
                  alignItems:'center'
              }}>
                  
                  <Animated.View style={{
                      backgroundColor:colors.primaryfi,
                      borderColor:'white',
                      borderRadius:50,
                      marginBottom:10,
                      width:100,
                      height:100,
                      opacity:opacity
                  }}>      
                  </Animated.View>
                     
                    <View style ={{marginBottom:10}}> 
                      <Button
                         title ="FADE-IN"
                          onPress ={ fadeIn }
                      />
                    </View>

                      <Button
                         title="FADE-OUT"
                         onPress ={ fadeOut }
                      />
              </View>
        </View>
    )
};
