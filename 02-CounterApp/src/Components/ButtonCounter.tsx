import React from  'react';
import { View, Text, TouchableNativeFeedback, StyleSheet, Platform , TouchableOpacity} from 'react-native';

interface Props {
    title: string;
    position?: 'right' | 'left'
    onPress : () => void;
}

export const ButtonCounter = ( { title, position = 'right', onPress }:Props  ) => {
   

    const android = () => {
        return(
            <View
            style = {[
              styles.buttonRlocation,
              (position === 'right') ? styles.right : styles.left
             ]}
          >
          <TouchableNativeFeedback
                   background={TouchableNativeFeedback.Ripple('#fff', false, 60)}
                  onPress= {  onPress   }
              >
                   <View
                     style={ styles.containerButton}
                   >
                       <Text style= { styles.textButton}  > { title } </Text>
                   </View>
              </TouchableNativeFeedback>
          </View>    
        )
    }

    const ios = () => {
        return(
            <TouchableOpacity
            activeOpacity = {0.75}
            style = {[
                styles.buttonRlocation,
                (position === 'right') ? styles.right : styles.left
               ]}
               onPress = { onPress }
            >
                 <View  style={ styles.containerButton} >
                       <Text>{ title }</Text>
                 </View>
            </TouchableOpacity>
        )
    }
    
    return (Platform.OS === 'ios') ? ios() : android() //Identifica sistemas operativos
};


const styles = StyleSheet.create({
    
    buttonRlocation:{
        position:'absolute',
        bottom:0,
        margin :4
    },
     
    right:{
      right: 0
    },

    left:{
        left:0
    },

    containerButton:{
        backgroundColor:'#FE1139',
        padding: 10,
        borderRadius:10,
        width: 60,
        height: 60,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    textButton:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        alignSelf:'center'
    },
   
});

