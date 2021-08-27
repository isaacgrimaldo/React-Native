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
        flexDirection:'column',
        justifyContent:'space-between',
    },
    box1:{
        flex: 1,
        height: 200,
        fontSize:25,
        borderWidth:2,
        borderColor:'#FFF',
        textAlign:'center',
    },
    box2:{
        flex: 2,
        height: 500,
        fontSize:25,
        borderWidth:2,
        borderColor:'#FFF',
        textAlign:'center',
    },
    box3:{
        flex:1,
        fontSize:25,
        borderWidth:2,
        borderColor:'#FFF',
        textAlign:'center',
    }
});
