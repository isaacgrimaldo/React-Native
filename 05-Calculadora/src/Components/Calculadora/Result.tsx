import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../../Theme/apptheme';

interface Result {
    state:string;
    lastState:string;
}

export const Result = ({state, lastState }:Result) => {
    return (
        <View style= {{
            
        }}>
             
             <Text style = {styles.textminResult}> 
                { (lastState !== '0') ?lastState :''} 
             </Text>
             <Text 
               style = {styles.textResult}
               numberOfLines= {1}
               adjustsFontSizeToFit
             >
               {state}
             </Text>
        </View>
    )
}
