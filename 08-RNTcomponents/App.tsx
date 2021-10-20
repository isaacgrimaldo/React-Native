import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './src/navegation/AppStack';

const App = () => {
  return(
   <NavigationContainer>
          <AppStack/>
   </NavigationContainer>
  ) 
}


export default App;