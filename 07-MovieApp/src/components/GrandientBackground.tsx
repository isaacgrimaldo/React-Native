import React, { useContext } from 'react'
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { MoviesContext } from '../contexts/MoviesContexts';
import { colors } from '../screen/appTheme';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GrandientBackground = ( { children  }:Props ) => {
    const {grandientColors} = useContext(MoviesContext);
    const {primaryColor , sencundaryColor, prePrimaryColor , perSecColor}  = grandientColors
    
    return (
        <View style ={{flex:1}}>
               <LinearGradient
                 colors={[prePrimaryColor ,  perSecColor , 'transparent']}
                 style={StyleSheet.absoluteFillObject}
                 start ={{x:0.5 , y:0.0}}
                 end= {{x:0.5, y:0.6}}
               />       

            <Animated.View  style={{...StyleSheet.absoluteFillObject , backgroundColor:'red'}}>
                <LinearGradient
                 colors={[primaryColor ,  sencundaryColor , 'transparent']}
                 style={StyleSheet.absoluteFillObject}
                 start ={{x:0.5 , y:0.0}}
                 end= {{x:0.5, y:0.6}}
               />       
            </Animated.View> 

               {children}
        </View>
    )
}
