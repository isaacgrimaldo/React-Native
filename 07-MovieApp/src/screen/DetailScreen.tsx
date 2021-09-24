import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, ScrollView, Image, Dimensions, StyleSheet, MaskedViewComponent } from 'react-native';
import { RootStackNavegator } from '../navigator/StackNavegator';

interface Props extends StackScreenProps <RootStackNavegator , 'DetailScreen'> {};

const heightScreen = Dimensions.get('window').height;

export const DetailScreen = ({ route }:Props) => {
    

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

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