import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text :string;
    theme?:'oraingButton' | 'greyButton' | 'whiteGreyButton';
    size ?:boolean;
    action: ( addNumber:string ) => void;
}

export const ButtonCalc = ( { text , theme = 'greyButton', size = false, action }:Props ) => {
    
     const color = (theme !== 'whiteGreyButton') ? 'white' : '#2D2D2D'

    return (
        <TouchableOpacity
           onPress = { () => action(text) }
        >
        <View style = {{
              ...styles.buttonContainer,
              ...styles[theme],
              width:(size) ? 180 : 80
            }}>
                      <Text style={{
                        ...styles.buttonText, 
                        color: color
                    }}> {text} </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    oraingButton:{
        backgroundColor:'#FF9427',
    },
    greyButton:{
        backgroundColor:'#2D2D2D',
    },
    whiteGreyButton:{
      backgroundColor:'#1D2D2D'
    },
    buttonContainer:{
        width:80,
        height:80,
        backgroundColor:'#9B9B9B',
        justifyContent:'center',
        borderRadius:50,
        margin:3
    },
    buttonText:{
     textAlign:'center',
     fontWeight:'600',
     fontSize:30,
    },
});
