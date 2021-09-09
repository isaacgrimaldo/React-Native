import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from './useMovies';
import { colors } from './appTheme';
import { MovieCard } from './MovieCard';


export const HomeScreen = () => {

    const { cinemaMovies , isloading } = useMovies();

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
        <View>
             <MovieCard Movie ={cinemaMovies[0]} />
        </View>
    )
}
