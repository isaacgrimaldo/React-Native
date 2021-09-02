import React from 'react'
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any , any>{};

export const Page3Screen = ( { navigation }:Props ) => {
    return (
        <View style ={ styles.globalMargin }>
             <Button 
                title="Ir a enterior pagina"
                onPress = { () => navigation.goBack()}
             />
             <Button 
                title="Ir a enterior pagina"
                onPress = { () => navigation.popToTop()}
             />
        </View>
    )
}
