import React from 'react'
import { Button, View } from 'react-native';

interface Props {
     fadeIn: () => void;
     fadeOut: () => void;
     showFade:boolean;
}

export const ButtonOptions = React.memo( ({ fadeIn , fadeOut , showFade}:Props) => { 

    return(
        <View>
            
        </View>
    )
}) 
