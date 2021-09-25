import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/castInterfaces';

interface Props {
    actor:Cast,
}

export const CardActors = ( { actor }:Props ) => {
    
   const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    
    return (
        <View style = {styles.imgContainer}>
            <Image
               style= {styles.img}
               source = {{
                   uri
               }}
            />
            <Text>{actor.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    imgContainer:{
        flexDirection:'row'
    },
    img:{
        width:30,
        height:30
    }
});