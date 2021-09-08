import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';

import { AuthContext, } from '../context/AuthContex';
import { styles, colors } from '../themes/appTheme';

export const SettingScreen = () => {

     const  insets =  useSafeAreaInsets()
     const {  authState , authState:{favoriteIcon} } = useContext(AuthContext);

    return (
        <View style = {{ marginTop: insets.top , marginHorizontal:10 }} >
            <Text style = { styles.textTitle }>Setting Screen</Text>
            <Text
              style = {{
                  fontSize:22,
                  fontWeight:'bold',
              }} 
            >
                 { JSON.stringify( authState , null , 3) }
            </Text>

             {
                 (favoriteIcon) && ( 
                     <Icon name={favoriteIcon}  size ={ 80}  color={colors.ter} />
                 )
             }
        </View>
    )
}
