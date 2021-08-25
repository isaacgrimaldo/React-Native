import React from 'react'
import {  View ,  StyleSheet } from 'react-native';

export const PositionsScreeen = () => {
    return (
        <View style= { styles.container}>
            <View  style = {styles.oneBox}/>
            <View  style = {styles.twoBox}/>
            <View  style = {styles.threeBox}/>
            <View  style = {styles.fourBox}/>
            <View  style = {styles.objecAll}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        // flex: 1,
        width:300,
        height:500,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#5886D4',
    },
    oneBox:{
        backgroundColor:'#38545D',
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor:'#fff',
        left:120,
        top:50
    },

    twoBox: {
        backgroundColor:'#225447',
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor:'#fff', 
        right:120,
        top:-250,
    },
    threeBox: {
        backgroundColor:'#A25447',
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor:'#fff', 
        position: 'absolute',
        top:0,
        right:0,
    },
    fourBox: {
        backgroundColor:'#B28447',
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor:'#fff', 
        position:'absolute',
        bottom:0,
        right:0,
    },
    objecAll:{
        backgroundColor:'#fff',
        // ...StyleSheet.absoluteFillObject //Estira al max el componete
    }
});
