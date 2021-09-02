import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';

interface Props extends StackScreenProps<any, any>{};

export const Page2Screen = ({ navigation }:Props) => {

    //Carga funcionalidades ya encontradas en el componente por segunda vez
    const navigator  = useNavigation();
    
    useEffect(() => {
       navigation.setOptions({
           headerStyle : {
               backgroundColor:'black',
           },
           headerTitleStyle:{
               color:'white'
           },
           headerBackTitle:'back',
           headerBackTitleStyle:{
               color:'white',
               backgroundColor:'white'
           }
       })
    }, [])

    return (
        <View style = { styles.globalMargin }>
        <Button
           title="Ir a pagina 3"
           onPress ={ () => navigation.navigate('Page3Screen')}
        />
        </View>
    )
}
