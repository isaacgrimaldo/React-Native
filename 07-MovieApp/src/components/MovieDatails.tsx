import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/castInterfaces';
import { MovieFull } from '../interfaces/interfaces';
import { colors } from '../screen/appTheme';
import currencyFormatter from 'currency-formatter';
import { CardActors } from './CardActors';


interface Props {
    details?:MovieFull,
    cast:Cast[],
}

export const MovieDatails = ({ details ,  cast }:Props) => {

    const getGender = details?.genres.map(G => G.name );  

    return (
        <View style ={styles.container}>
           
           {/* statu */}
           <View style ={ styles.containerVotes}>
               <Text style ={{fontSize:15}} >
                {`Estado: ${details?.status}`}
               </Text>
               <Text>{`      Presupuesto: ${currencyFormatter.format( details!.budget ,{ code:'USD'})}`}</Text>
           </View>

            {/*Votes*/}
            <View style =  {styles.containerVotes} >
                <Icon name='heart' color='red' size= {50} />
                <Text style = { styles.textVotesAve } >
                     { ` ${details?.vote_average}`}
                </Text>
                <Text style={styles.textVotesNum} >
                     {`  votes: ${ details?.vote_count}`}  
                </Text>
             </View> 
               
            {/*Genders */}
            <Text style= {styles.genresTitle}>
                Géneros
            </Text>
            <Text style= {styles.genres} >
            {` ${getGender?.join(', ')}`}
            </Text> 

            {/*  overView */}
            <View style={styles.container}>
                <Text style ={ styles.overViewText }>
                    {details?.overview}
                </Text>
            </View>
           
           {/* Casting */}
            <CardActors  actor= { cast[0]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
        marginVertical:10,
    },
    texts:{
      fontSize:16,
      fontWeight:'normal'
    },
    containerVotes:{
        flexDirection:'row',
        alignItems:'center',
    },
    textVotesAve:{
      fontSize:25,
      color:colors.secondrT
    },
    textVotesNum:{
        fontSize:25,
        color:colors.primary
    },
    genresTitle:{
       fontSize:25
    },
    genres:{
        backgroundColor:'red',
        padding:10,
        marginHorizontal:5,
        borderRadius:10
    },
    overViewText:{
        textAlign:'justify',
        fontWeight:'500'   
    }
});