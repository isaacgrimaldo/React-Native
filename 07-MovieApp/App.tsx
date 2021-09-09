import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar , SafeAreaView } from 'react-native';
import { StackNavegator } from './src/navigator/StackNavegator';

const App = () => {
  return (
    <NavigationContainer>
      
      <StatusBar
        barStyle= 'light-content'
        backgroundColor ='black'
      />
         <StackNavegator/>
      
    </NavigationContainer>
  )
  }

export default App;
