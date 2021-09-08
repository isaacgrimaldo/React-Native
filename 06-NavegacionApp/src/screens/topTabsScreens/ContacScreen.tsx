import React from 'react'
import { View, Text, Button } from 'react-native';
import { useContext} from 'react';
import { AuthContext } from '../../context/AuthContex';

export const ContacScreen = () => {
    
    const { singIn  , authState:{isloggedIn} } =  useContext( AuthContext );
    
    return (
        <View style = {{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>ContacScreen</Text>
            
            {
                isloggedIn === false && <Button title="SingIn"onPress = { singIn }/>
            }
        
        </View>
    )
}
