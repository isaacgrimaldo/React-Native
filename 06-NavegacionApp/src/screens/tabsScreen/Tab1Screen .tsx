import React from 'react'
import { Text, View } from 'react-native';
import { styles, colors } from '../../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const myIcon = <Icon name="barbell-sharp" size={90} color={colors.six} />;


export const Tab1Screen  = () => {
    return (
        <View style ={styles.tabsScreen}>
           <Text>Tab1Screen</Text>
           <Text>
               {myIcon}
           </Text>
        </View>
    )
}
