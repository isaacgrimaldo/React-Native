import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Movies } from '../interfaces/interfaces';

interface Prop {
    Movie:Movies;
    size?:'G'| 'S';
}

export const MovieCard = ( { Movie , size = 'G'  }:Prop ) => {
     
   const uri = `https://image.tmdb.org/t/p/w500/${Movie.poster_path}`

    return (
        <View style= {  (size === 'G') ? styles.sizesImgG : styles.sizesImgS  }>
            <View style ={ styles.imgContainer}>
                <Image
                   source ={{ uri }}
                   style = {styles.img}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
   sizesImgG:{
       width:250,
       height:300
   },
   sizesImgS:{
    width:100,
    height:150
   },
   imgContainer:{
       flex:1,
       shadowColor: "red",
       shadowOffset: {
           width: 0,
           height: 9,
       },
       shadowOpacity: 1,
       shadowRadius: 18.35,   
       elevation: 25,
   },
   img:{
       flex:1,
       borderRadius:10
   }
});
