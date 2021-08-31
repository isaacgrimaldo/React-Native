import React, { useState } from 'react';
import { View } from 'react-native';
import { Result } from '../Components/Calculadora/Result';
import { styles } from '../Theme/apptheme';
import { KeyBoardCalc } from '../Components/Calculadora/KeyBoardCalc';

export  const CalculadoraScreen = () => {

    const [number, setnumber] = useState('100');
    const [lastNumber, setlastNumber] = useState('0')

      return(
          <View style ={ styles.calculadoraContainer} >
                 <Result state= {number} lastState = { lastNumber} />
                 <KeyBoardCalc 
                   handlerState = { setnumber } 
                   state ={number} 
                   lastState = { lastNumber} 
                   handlelastState={setlastNumber}
                   />
          </View>
      )
}