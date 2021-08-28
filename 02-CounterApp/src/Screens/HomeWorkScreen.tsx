import React from 'react'
import { View, StyleSheet } from 'react-native';

export const HomeWorkScreen = () => {
    return (
        <View style = { styles.container }>
              <View style = { styles.purpleBox}/>
              <View style = { styles.oragenBox}/>
              <View style = { styles.blueBox}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'#fff',
        backgroundColor:'#5856D6',
        alignSelf:'center',
    },
    oragenBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'#fff',
        backgroundColor:'#F0A23B',
        top:50
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'#fff',
        backgroundColor:'#25C4D9',
    }
});