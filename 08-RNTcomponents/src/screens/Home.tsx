import React from 'react'
import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListComp } from '../components/flatlist/FlatLIstComp';

export const Home = () => {
    return (
        <View style = {{ flex:1 }}>
              <FlatListComp/>
              <Icon name='arrow-redo-circle-outline' size={50} color={'#fff'}/>
        </View>
    )
}
