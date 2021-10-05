import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { StackNavegator } from './src/navigator/StackNavegator';
import { MovieProvider } from './src/contexts/MoviesContexts';
// import { FadeScreen } from './src/screen/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      
      <StatusBar
        barStyle= 'light-content'
        backgroundColor ='black'
      />
      <AppState>
           <StackNavegator/>
          {/* <FadeScreen/> */}
      </AppState>
    </NavigationContainer>
  )
  }

const AppState = ( {children}:{children:JSX.Element} ) => {
   return(
     <MovieProvider>
        {children}
     </MovieProvider>
   )
}

export default App;


