import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';

export const SettingScreen = () => {

     const  insets =  useSafeAreaInsets()

    return (
        <View style = {{ marginTop: insets.top }} >
            <Text style = { styles.textTitle }>Setting Screen</Text>
        </View>
    )
}
