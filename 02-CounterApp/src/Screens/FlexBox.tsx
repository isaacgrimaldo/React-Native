import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexBox = () => {
    return (
        <View style={ styles.container}>
             <Text style={ styles.box1 }> Box  1  </Text>
             <Text style={ styles.box2 }> Box  2  </Text>
             <Text style={ styles.box3 }> Box  3  </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end'
        
        // justifyContent:'space-between',
    },
    box1:{
        fontSize:25,
        borderWidth:2,
        borderColor:'#FFF',
        textAlign:'center',
    },
    box2:{
        fontSize:25,
        borderWidth:2,
        borderColor:'#FFF',
        textAlign:'center',
    },
    box3:{
        fontSize:25,
        borderWidth:2,
        borderColor:'#FFF',
        textAlign:'center',
    }
});
