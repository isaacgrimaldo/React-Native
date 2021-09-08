import React from 'react'
import { Text, View } from 'react-native';
import { styles, colors } from '../../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../../context/TouchableIcon';


const myIcon = <Icon name="barbell-sharp" size={90} color={colors.six} />;


export const Tab1Screen  = () => {
    return (
        <View style ={styles.tabsScreen}>
           <Text style = { styles.textTitle } >Tab1Screen</Text>
           <View style ={{ flexDirection:'row' , flexWrap:'wrap'  }}  >
               <TouchableIcon iconName ='add-circle-outline'/>
               <TouchableIcon iconName ='apps-outline'/>
               <TouchableIcon iconName ='build-sharp'/>
               <TouchableIcon iconName ='bulb-sharp'/>
               <TouchableIcon iconName ='bluetooth-sharp'/>
               <TouchableIcon iconName ='battery-charging-sharp'/>
           </View>
        </View>
    )
}
