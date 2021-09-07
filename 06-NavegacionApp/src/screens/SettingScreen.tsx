import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext, AuthState } from '../context/AuthContex';
import { styles } from '../themes/appTheme';

export const SettingScreen = () => {

     const  insets =  useSafeAreaInsets()
     const authState = useContext(AuthContext);

    return (
        <View style = {{ marginTop: insets.top }} >
            <Text style = { styles.textTitle }>Setting Screen</Text>
            <Text
              style = {{
                  fontSize:22,
                  fontWeight:'bold',
              }} 
            >
                 { JSON.stringify( authState , null , 3) }
            </Text>
        </View>
    )
}
