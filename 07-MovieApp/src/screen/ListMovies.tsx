import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MovieCard } from './MovieCard';
import { Movies } from '../interfaces/interfaces';

interface  Props {
    data:Movies[],
    listName:string
}

export const ListMovies = ({ data , listName }: Props) => {
    
    return (
        <View style ={{ marginVertical:5  }}>
            <Text style = {styles.title} >{listName}</Text>
            <FlatList
               data = { data}
               renderItem = { ({item}) => <MovieCard Movie ={item} size ='S' />} 
               keyExtractor = {(item) => item.id.toString()}
               horizontal = {true} 
            />
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize:30,
        textAlign:'center',
    }
});