import React, { useContext } from 'react'
import { View ,  Text, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

import { styles, colors } from '../../themes/appTheme';
import { AuthContext } from '../../context/AuthContex';

export const AlbumScreen = () => {

    const { logout, authState:{isloggedIn} } = useContext( AuthContext );

    return (
        <View style ={{ 
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'black'
        }}>
            <Text 
               style = {{...styles.textTitle , color :'white'}}
            >
             AlbumScreen
            </Text>
             
             {
                  (isloggedIn) &&(
                    <TouchableOpacity
                    style ={{ ...styles.linkButton}}
                    onPress = { () => logout()}
                 >
                      <View style = {{ flexDirection:'row' }}>
                          <Icon name ='log-out-outline' size = {50} color={colors.fur} />
                          <Text style ={{ color:colors.fur, fontSize:50 , marginLeft:5 }}>
                           Salir
                          </Text>
                      </View>
                 </TouchableOpacity>
                     
                  ) 
             }
        </View>
    )
}