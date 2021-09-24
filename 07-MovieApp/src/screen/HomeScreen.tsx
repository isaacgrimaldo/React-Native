import React from 'react'
import { ActivityIndicator, Text, useWindowDimensions, View, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { colors } from './appTheme';
import { MovieCard } from './MovieCard';
import { ListMovies } from './ListMovies';


export const HomeScreen = () => {

    const { playNow, popular, upComing, topRated ,isloading  } = useMovies();
    const { width:windowWidth } = useWindowDimensions();
    const sizeItem = windowWidth / 1.6;

    if(isloading){
        return(
            <View style ={{ 
                 flex:1 , 
                 justifyContent:'center', 
                 alignContent:'center',
                 backgroundColor:colors.primaryfi  
             }}>
                 <ActivityIndicator color={colors.second} size={100}  />
                <Text style ={{textAlign:'center', fontSize:50, color:'white'}}>LOADING</Text>
            </View>
        )
    }

    return (
        <ScrollView style = {{ marginBottom:15  }}>

        <View style ={{ marginTop: 20 }} >
            <View style = {{ height:380}}>
             <Carousel
              data = {playNow}
              sliderWidth={windowWidth}
              itemWidth={ sizeItem }
              renderItem = { ({ item }:any ) => <MovieCard Movie ={ item } />}
            />
            </View>
        </View>
        <View>
             <ListMovies data = { popular } listName ="Populares" />
             <ListMovies data = { topRated } listName ="Lo mas valorado" />
             <ListMovies data = { upComing } listName ="Proximamente" />
        </View>
        </ScrollView>
    )
}
