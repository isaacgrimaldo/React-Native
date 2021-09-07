import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuDeslitPers } from './src/navegator/MenuDeslitPers';

// import { MenuDeslit } from './src/navegator/MenuDeslit';
// import { StackNavegator } from './src/navegator/StackNavegator';
import {StatusBar} from 'react-native';
import { AuthProvider } from './src/context/AuthContex';


const App = () => {
  return (
     <NavigationContainer>
        <StatusBar
          hidden = {true}
          animated = {true} 
        />
        <AppState>
          {/* <StackNavegator /> */}
          {/* <MenuDeslit/> */}
        <MenuDeslitPers/>
        </AppState>
     </NavigationContainer>
  )
}

const AppState = ({ children }:{ children: JSX.Element }) => {
   return(
      <AuthProvider>
          {children}  
      </AuthProvider>
   )
}


export default App;