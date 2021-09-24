import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Movies } from '../interfaces/interfaces';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavegator } from '../navigator/StackNavegator';

type DetailScreenNavigationProp = StackNavigationProp<RootStackNavegator , 'DetailScreen'>

interface Prop {
    Movie:Movies;
    size?:'G'| 'S';
}

export const MovieCard = ( { Movie , size = 'G'  }:Prop ) => {
     
   const uri = `https://image.tmdb.org/t/p/w500/${Movie.poster_path}`
   const navigation =  useNavigation<DetailScreenNavigationProp>();

    return (
       <TouchableOpacity
         onPress = {() => navigation.navigate('DetailScreen', Movie )  }
         activeOpacity = {0.80}
         style = {{
             marginHorizontal:5,
             paddingBottom:10,
             paddingHorizontal:7
         }}
       >
        <View style= {  (size === 'G') ? styles.sizesImgG : styles.sizesImgS  }>
            <View style ={ styles.imgContainer}>
                <Image
                   source ={{ uri }}
                   style = {styles.img}
                />
            </View>
        </View>
       </TouchableOpacity> 
    )
}


const styles = StyleSheet.create({
   sizesImgG:{
       width:250,
       height:300
   },
   sizesImgS:{
    width:150,
    height:200
   },
   imgContainer:{
       flex:1,
       shadowColor: 'black',
       shadowOffset: {
           width: 10,
           height: 9,
       },
       shadowOpacity: 0.2,
       shadowRadius: 50,   
       elevation:9
   },
   img:{
       flex:1,
       borderRadius:10,
       marginHorizontal:5
   }
});
