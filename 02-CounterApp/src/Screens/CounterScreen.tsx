import React , { useState } from 'react';
import {View , Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ButtonCounter } from '../Components/ButtonCounter';

export const CounterScreen = ( ) => {

    const [ counter , setCounter ] = useState(10);

    return(
        <View style={ styles.container }>
           <Text
               style = { styles.textCounter}
               >
               Counter: {counter}
            </Text>      


            <ButtonCounter
                title={ '+ 1'}
                onPress= {  () => setCounter( counter + 1)  }
            />

            <ButtonCounter
               title={ '- 1' }
               onPress = { () => setCounter( counter - 1 )}
               position = {'left'}
            />

            {/* <TouchableOpacity
                style = { styles.buttonLlocation}
                onPress= { () => setCounter( counter - 1)}
            >
                 <View
                   style={ styles.containerButtonR}
                 >
                     <Text style= { styles.textButtonR}  > - 1 </Text>
                 </View>
            </TouchableOpacity> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#052AFF',
        flex: 1,
        justifyContent:'center'
    },
    textCounter:{
        textAlign:'center',
        fontSize:50,
        color:'#fff'
    },
    
});