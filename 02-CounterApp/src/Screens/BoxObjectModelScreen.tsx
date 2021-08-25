import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style= { styles.container }>
             <Text style = { styles.title}> Box Object Model  </Text>
             <Text style = { styles.title}> Box Object Model  </Text>
             <Text style = { styles.title}> Box Object Model  </Text>
        </View>
    )
}

const styles = StyleSheet.create({
     
    container:{
         flex:1,
         backgroundColor: '#004499',
         margin:10,
         borderWidth:10,
         borderColor : '#7700FF' ,
         padding: 10,
         borderRadius:50
     },

     title:{
        fontSize:30,
        textAlign: 'center',
        color:'#FF00CC',
        borderWidth: 10,
        padding:5,
        textAlignVertical:'center',
        fontWeight: '700',
        margin: 10,
        shadowColor:'white',
        shadowOffset: {width:10 , height:20},     
     }
});