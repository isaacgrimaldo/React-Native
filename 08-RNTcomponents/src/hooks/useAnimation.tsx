import { useEffect, useRef, useState } from "react";
import { Dimensions, Animated, Easing, StyleSheet } from 'react-native';


interface Props {
    type:'left' | 'rigth'|'top'|'bottom'
 }
 

export const useAnimation = ( {  type }:Props) => {
    
    const { height , width } = Dimensions.get('screen');
    const fadeType= useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current
    const direction= useRef(0);
    
    const reset = (value:any) => {
        fadeType.setValue(value);
    };

    switch (type) {
        case 'top': {
           direction.current = - height
           fadeType.setValue( direction.current);
        }        
        break;
        case 'bottom': {
            direction.current = height
            fadeType.setValue( direction.current);
        }
        break;
        case 'left': {
            direction.current = - width
            fadeType.setValue( direction.current);
         }        
         break;
         case 'rigth': {
             direction.current = width
             fadeType.setValue( direction.current);
         }
        default:
            break;
    }
     
    

    const fadeIn = () => {
         
        Animated.timing(
          fadeType,
          {
            toValue:0,
            duration:750,
            useNativeDriver:true,
            easing: Easing.bounce
          }
          ).start();
          

        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:2000,
                useNativeDriver:true,
            }
        ).start();
    }

    const fadeOut = () => {
    
        Animated.timing(
            opacity,
            {
                toValue:0,
                duration:250,
                useNativeDriver:true
            }
        ).start(() => reset(direction.current));
    }

    return{
         opacity,
         fadeType,
         fadeIn,
         fadeOut,
    }
    
}
