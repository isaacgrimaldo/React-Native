import React, { useRef } from 'react'
import { View } from 'react-native';
import { styles } from '../../Theme/apptheme';
import { ButtonCalc } from './ButtonCalc';

interface Control{
    handlerState:any;
    state:string;
    lastState:string;
    handlelastState:any;
}

enum Operations{
    sumar,restar,multiplicar,dividir
}
export const KeyBoardCalc = ({ handlerState: handler, state, lastState , handlelastState: ControllLS }: Control) => {


    const operation = useRef<Operations>();

    const resetValue =  () => {
         handler('0');
         ControllLS('0');
    };

    const changeNumber= ( addNumer:string ) =>{
         
        //No dejamos ingresar doble
        if( state.includes('.') && addNumer ==='.') return;
    

        if(state.includes('0') || state.includes('-0')){
            
            //Punto decimal
            if(addNumer === '.'){
                handler(state + addNumer);
              
            //añadir 0  depues del punto
            }else if( addNumer === '0' && state.includes('.') ){
                handler(state + addNumer);
                
            //cambiar no dejamos escribir mas un 0 sin el valor inicial es un  0 
            }else if( addNumer === '0' && state.startsWith('0')){
                handler(state);

            //Permitir añadir numeros depués de un punto y ceros
            }else if( state.includes('0') && state.includes('.') ){
                handler(state + addNumer);
            
            //Usar numeros con mas de un '0' = 100 o 1000005
            }else if( addNumer === '0' && !state.startsWith('0') ){
                handler(state + addNumer);
               
                //Cambiamos el numero inicial
            }else if( addNumer !=='0' && state.startsWith('0') ){
                handler(addNumer);

                //Escribe el numero sin no hay limitacion
            }else{
                handler(state + addNumer);    
            }
        }else{
            handler(state + addNumer);
        }     
    };

    const handleSing = ( ) => {
         if(state.includes('-')){
              handler( state.replace('-','') );
         }else{
             handler( '-' + state);
         }
    }

    const handlerDel = () => {
         
        let sing = '';
        let numTem = state;

        if(state.includes('-')){
            sing = '-';
            numTem = state.substr(1);
        }
            
        if(numTem.length > 1){
            handler( sing + numTem.slice(0 , -1));
        }else{
            handler('0')
        }    
    }

    const changeLastState = () => {
        if(state.endsWith('.')){
            ControllLS(state.substr(1));
            handler('0');
        }else{
            ControllLS(state);
            handler('0');
        }
    }

    const divide = ()  => {
             changeLastState();
            operation.current = Operations.dividir;
    };

    const multiply  = ()  => {
        changeLastState();
        operation.current = Operations.multiplicar;
    };   
    
    const subtract  = ()  => {
        changeLastState();
        operation.current = Operations.restar;
    };

    const sum  = ()  => {
        changeLastState();
        operation.current = Operations.sumar;
    };
    
    const calc =  () => {
       
        const num1 = Number(state) , num2 = Number(lastState);
        let result = 0;
        switch (operation.current) {
            case Operations.sumar:
                result = num2 + num1
                handler( result.toString() );    
              break;
            case Operations.restar:
                result = num2 - num1
                handler( result.toString() );
              break;
                
            case Operations.multiplicar:
                result = num2 * num1
                handler( result.toString() );    
              break;
            case Operations.dividir:
                 if(num1 === 0){
                    handler('Syntasix ERROR');
                    setTimeout(()=> resetValue(), 600);
                    return;
                 }
                result = num2 / num1
                handler( result.toString() );
              break;  
        };

         ControllLS('0');
    } 

    return (
        <View style = { styles.keyboardContainer }>
            
            <View style= { styles.fila}>
             <ButtonCalc text ='C'   action ={ resetValue }/>
             <ButtonCalc text ='+/-' action ={ handleSing } />
             <ButtonCalc text ='Del'   action ={  handlerDel }/>
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

