import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Text, View, ScrollView, Image, Dimensions, StyleSheet, MaskedViewComponent, ActivityIndicator } from 'react-native';
import { RootStackNavegator } from '../navigator/StackNavegator';
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieDatails } from './../components/MovieDatails';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { colors } from './appTheme';


interface Props extends StackScreenProps <RootStackNavegator , 'DetailScreen'> {};

const heightScreen = Dimensions.get('window').height;

export const DetailScreen = ({ route }:Props) => {
    

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
                : < MovieDatails details ={movieFull}  cast ={ cast }   />
            }

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
    }
    
});