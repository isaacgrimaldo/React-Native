import React from 'react'
import { View, Text, Button, Alert } from 'react-native';
import { HeaderMenuItem } from '../components/flatlist/MenuItem';
import { stylesGlobal } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
       Alert.alert(
           'Title Alert',
           'Body Alert',
           ///Buttons
           [
               {
                   text:'Close', 
                   onPress:() => console.log('Cancel'),
                   style:'cancel'
               },
               {
                text:'OK', 
                onPress:() => console.log('Ok'),
                style:'default',
                
               },
               {
                text:'Destroy', 
                onPress:() => console.log('puuuuuum'),
                style:'destructive'
               },
           ],
           //Options
           {
               cancelable:true,
               onDismiss: () => console.log('dismi'),
           }
       )   
    }

    const showPrompt  = () => {
        //just IOS
    }

    return (
        <View style ={stylesGlobal.marginGlobal}>
             <HeaderMenuItem title="Alerts"/>
               
             <Button title="show Alert" onPress={showAlert}/>

             <Button title="show Prompt" onPress={showPrompt}/>
        </View>
    )
}
