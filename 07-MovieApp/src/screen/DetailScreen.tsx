import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, ScrollView, Image, Dimensions, StyleSheet, ActivityIndicator, useWindowDimensions, TouchableOpacity } from 'react-native';
import { RootStackNavegator } from '../navigator/StackNavegator';
import  Icon  from 'react-native-vector-icons/Ionicons';


import { MovieDatails } from './../components/MovieDatails';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { colors } from './appTheme';



interface Props extends StackScreenProps <RootStackNavegator , 'DetailScreen'> {};

const heightScreen = Dimensions.get('window').height;

export const DetailScreen = ({ route , navigation }:Props) => {
    

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
    
    const { movieFull,  cast, islodding }  = useMovieDetails(movie.id);
    
    return (
        <ScrollView>
        <View style ={ styles.contaierImg } >
             <Image
               style = { styles.img }
               source ={{uri}}
             />
        </View>
        <View style={styles.contaierInfo}>
            <Text style={{fontSize:15 , opacity:0.6 ,  fontWeight:'bold', }} >{movie.original_title}</Text>
            <Text style={{fontSize:19 , opacity:0.8 ,  fontWeight:'900', }} >{movie.title}</Text>
        </View>
         
            {
                (islodding )
                ? <ActivityIndicator color={colors.secondrfi} size ={100} />
                : <MovieDatails cast ={cast} details ={movieFull}/>
            }

          {/*back button*/}
          <View style = {styles.backButton}
             onResponderMove = { e =>  console.log(e)}
          >
            <TouchableOpacity
               activeOpacity={.25}
               onPress = { () => navigation.goBack() }
            >
               <Icon name='arrow-undo'size={50} color={'white'} />
            </TouchableOpacity>        
          </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contaierImg:{
        width: '100%',
        height: heightScreen * 0.7,
        overflow:'hidden',
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 14,
    },
    img:{
        flex:1,
    },
    contaierInfo:{
        marginHorizontal:10,
        marginVertical:10
    },
    backButton:{
      position:'absolute',
      zIndex:50,
      elevation:15,
      top:10,
      left:20,
      padding:10,
      borderRadius:50,
      backgroundColor:colors.primary,
      
    }
});