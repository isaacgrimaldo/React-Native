import React from 'react';
import { SafeAreaView, StatusBar  } from 'react-native';
import { CalculadoraScreen } from './src/Screens/CalculadoraScreen'; 
import { styles } from './src/Theme/apptheme';

export const App = () => {
     return(
          <SafeAreaView style ={ styles.backGround }>
               <StatusBar
                  backgroundColor='black'
                  barStyle ='light-content'
               />
             <CalculadoraScreen/>
          </SafeAreaView>
     )
}
