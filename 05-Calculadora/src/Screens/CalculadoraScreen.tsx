import React, { useState } from 'react';
import { View } from 'react-native';
import { Result } from '../Components/Calculadora/Result';
import { styles } from '../Theme/apptheme';
import { KeyBoardCalc } from '../Components/Calculadora/KeyBoardCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export  const CalculadoraScreen = () => {

   const { number , lastNumber, controlls } = useCalculadora();
      return(
          <View style ={ styles.calculadoraContainer} >
                 <Result state= {number} lastState = { lastNumber} />
                 <KeyBoardCalc 
                     controlls = { controlls }
                   />
          </View>
      )
}