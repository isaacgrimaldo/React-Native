import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Cast } from '../interfaces/castInterfaces';
import { colors } from '../screen/appTheme';

interface Props {
    actor:Cast,
}

const windowWidth =  Dimensions.get('screen').width; 

export const CardActors = ( { actor }:Props ) => {
    
   let uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    

   if(!actor.profile_path){
      uri ='https://image.shutterstock.com/image-vector/vector-illustration-male-silhouette-profile-600w-1053115607.jpg'
   }

    return (
        <View style = {styles.cardContainer} >
          
          <View style ={ styles.imgContainer}>
            <Image
               style= {styles.img}
               source = {{
                   uri
               }}
            />
          </View>
          <View style = {{ padding:10}}>
            <Text style ={{ fontSize:25 }}>
                {actor.name}
            </Text>
                
            <Text>
                {actor.character}
            </Text>
          </View>

        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:'#202020',
        marginBottom:30,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.20,
        shadowRadius: 10,
        elevation: 16,
        borderRadius:10,  
        marginHorizontal:10,
        padding:10
    },
    imgContainer:{
        height:250,
    },
    img:{
        flex:1
    }
});