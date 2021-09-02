import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuDeslit } from './src/navegator/MenuDeslit';
// import { StackNavegator } from './src/navegator/StackNavegator';

 const App = () => {
  return (
     <NavigationContainer>
        {/* <StackNavegator /> */}
        <MenuDeslit/>
     </NavigationContainer>
  )
}


export default App;