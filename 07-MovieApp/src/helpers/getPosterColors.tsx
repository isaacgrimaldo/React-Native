import React from 'react'
import { ColorValue } from 'react-native';
import ImageColors from 'react-native-image-colors';

export const getPosterColors = async( uri:string ) => {
     
    const colors =  await ImageColors.getColors(uri , {})
    
    let primary , secundary;

    switch (colors.platform) {
    case 'android':
        // android result properties
           primary = colors.dominant
           secundary = colors.lightMuted
        break;
    case 'web':
        // web result properties
       
        break
    case 'ios':
        // iOS result properties
        
        break
    default:
        throw new Error('Unexpected platform key')
    };

    return  [primary ,  secundary];

}
