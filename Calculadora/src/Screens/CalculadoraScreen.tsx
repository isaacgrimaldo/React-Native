import React from 'react';
import { View ,  Text } from 'react-native';
import { Result } from '../Components/Calculadora/Result';
import { styles } from '../Theme/apptheme';

export  const CalculadoraScreen = () => {
      return(
          <View style ={ styles.calculadoraContainer} >
                 <Result/>
                  <View style = { styles.buttonContainer}>
                      <Text style={ styles.buttonText}> 1 </Text>
                  </View>
          </View>
      )
}