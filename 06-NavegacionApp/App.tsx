import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuDeslitPers } from './src/navegator/MenuDeslitPers';
// import { MenuDeslit } from './src/navegator/MenuDeslit';
// import { StackNavegator } from './src/navegator/StackNavegator';
import {StatusBar} from 'react-native';
 const App = () => {
  return (
     <NavigationContainer>
        <StatusBar
          hidden = {true}
          animated = {true} 
        />
        {/* <StackNavegator /> */}
        {/* <MenuDeslit/> */}
        <MenuDeslitPers/>
     </NavigationContainer>
  )
}


export default App;