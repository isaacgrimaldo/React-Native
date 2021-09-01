import React, { useRef } from 'react'
import { View } from 'react-native';
import { styles } from '../../Theme/apptheme';
import { ButtonCalc } from './ButtonCalc';
import { ControllProps } from '../../interfaces/interfaces';

interface Control{
    controlls:ControllProps
}

export const KeyBoardCalc = ({ controlls }: Control) => {

   const { 
      calc,
      changeNumber,
      divide,
      handleSing,
      multiply,
      resetValue,
      setnumberDel,
      subtract,
      sum
    }= controlls

    return (
        <View style = { styles.keyboardContainer }>
            
            <View style= { styles.fila}>
             <ButtonCalc text ='C'   action ={ resetValue }/>
             <ButtonCalc text ='+/-' action ={ handleSing } />
             <ButtonCalc text ='Del'   action ={ setnumberDel }/>
             <ButtonCalc text ='÷' theme ='oraingButton' action ={ divide } />
            </View>
             
            <View style= { styles.fila}>
             <ButtonCalc text ='7' action ={ changeNumber } />
             <ButtonCalc text ='8' action ={ changeNumber } />
             <ButtonCalc text ='9' action ={ changeNumber } />
             <ButtonCalc text ='x' action ={ multiply}  theme ='oraingButton' />
            </View>

            <View style= { styles.fila}>
             <ButtonCalc text ='4'  action ={ changeNumber }/>
             <ButtonCalc text ='5'  action ={ changeNumber }/>
             <ButtonCalc text ='6'  action ={ changeNumber }/>
             <ButtonCalc text ='-' action ={ subtract }  theme ='oraingButton' />
            </View>

            <View style= { styles.fila}>
             <ButtonCalc text ='1' action ={ changeNumber }/>
             <ButtonCalc text ='2' action ={ changeNumber }/>
             <ButtonCalc text ='3' action ={ changeNumber }/>
             <ButtonCalc text ='+'  action ={ sum } theme ='oraingButton'/>
            </View>

            <View style= { styles.fila}>
             <ButtonCalc text ='0' size action ={ changeNumber } />
             <ButtonCalc text ='.' action ={ changeNumber }/>
             <ButtonCalc text ='=' action ={ calc } theme ='oraingButton'/>
            </View>
        </View>
    )
}

