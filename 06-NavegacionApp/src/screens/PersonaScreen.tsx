import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegator/StackNavegator';
import { AuthContext } from '../context/AuthContex';

//Forma sucia
// interface ParamsValues{
//     name:string;
//     id:number
// }

//Forma sucia
// interface Props extends StackScreenProps<any ,  any>{};

//Forma Correcta
interface Props extends StackScreenProps<RootStackParams ,  'PersonaScreen'>{};


export const PersonaScreen = ( { route,  navigation }:Props ) => {

    const params = route.params
    const { changeUserName } = useContext( AuthContext )

    useEffect(() => {
         navigation.setOptions({
             title: params.name,
             headerTitle: params.name,
             headerTitleStyle:{
                fontSize:35,
                textAlign:'center'     
             }  
         })
    }, [])
    
    useEffect(() => {
        changeUserName(params.name)
    },[])

    return (
        <View style = { styles.globalMargin}>
             <Text style ={{ color:'white' }} >{
                  JSON.stringify(route.params, null ,  3)              
             }</Text>
        </View>
    )
}
