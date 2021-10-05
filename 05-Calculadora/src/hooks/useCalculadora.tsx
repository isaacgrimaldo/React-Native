import { useRef, useState } from "react";
import { ControllProps } from '../interfaces/interfaces';

enum Operations{
    sumar,restar,multiplicar,dividir
}


export const useCalculadora = () => {
    
    const [number, setnumber] = useState('0');
    const [lastNumber, setlastNumber] = useState('0')
    const operation = useRef<Operations>( );
    
   
    const controlls:ControllProps = {
        resetValue : () => {
            setnumber('0');
            setlastNumber('0');
       },

        changeLastnumber : () => {
            if(number.endsWith('.')){
                setlastNumber(number.substr(1));
                setnumber('0');
            }else{
                setlastNumber(number);
                setnumber('0');
            }
        },

       changeNumber: ( addNumer:string ) =>{
         
        //No dejamos ingresar doble
        if( number.includes('.') && addNumer ==='.') return;
    

        if(number.includes('0') || number.includes('-0')){
            
            //Punto decimal
            if(addNumer === '.'){
                setnumber(number + addNumer);
              
            //añadir 0  depues del punto
            }else if( addNumer === '0' && number.includes('.') ){
                setnumber(number + addNumer);
                
            //cambiar no dejamos escribir mas un 0 sin el valor inicial es un  0 
            }else if( addNumer === '0' && number.startsWith('0')){
                setnumber(number);

            //Permitir añadir numeros depués de un punto y ceros
            }else if( number.includes('0') && number.includes('.') ){
                setnumber(number + addNumer);
            
            //Usar numeros con mas de un '0' = 100 o 1000005
            }else if( addNumer === '0' && !number.startsWith('0') ){
                setnumber(number + addNumer);
               
                //Cambiamos el numero inicial
            }else if( addNumer !=='0' && number.startsWith('0') ){
                setnumber(addNumer);

                //Escribe el numero sin no hay limitacion
            }else{
                setnumber(number + addNumer);    
            }
        }else{
            setnumber(number + addNumer);
        }     
     },
      
     handleSing : ( ) => {
        if(number.includes('-')){
             setnumber( number.replace('-','') );
        }else{
            setnumber( '-' + number);
        }
     },

     setnumberDel : () => {
         
        let sing = '';
        let numTem = number;

        if(number.includes('-')){
            sing = '-';
            numTem = number.substr(1);
        }
            
        if(numTem.length > 1){
            setnumber( sing + numTem.slice(0 , -1));
        }else{
            setnumber('0')
        }    
    },

    divide : ()  => {
            controlls.changeLastnumber(); 
        operation.current = Operations.dividir;
    },

    multiply  : ()  => {
    controlls.changeLastnumber();
    operation.current = Operations.multiplicar;
    },   

    subtract  : ()  => {
    controlls.changeLastnumber();
    operation.current = Operations.restar;
    },

    sum  : ()  => {
    controlls.changeLastnumber();
    operation.current = Operations.sumar;
    },
         
    calc :  () => {      
        const num1 = Number(number) , num2 = Number(lastNumber);
        let result = 0;
        switch (operation.current) {
            case Operations.sumar:
                result = num2 + num1
                setnumber( result.toString() );    
              break;
            case Operations.restar:
                result = num2 - num1
                setnumber( result.toString() );
              break;
                
            case Operations.multiplicar:
                result = num2 * num1
                setnumber( result.toString() );    
              break;
            case Operations.dividir:
                 if(num1 === 0){
                    setnumber('Syntasix ERROR');
                    setTimeout(()=> controlls.resetValue(), 600);
                    return;
                 }
                result = num2 / num1
                setnumber( result.toString() );
              break;  
        };

         setlastNumber('0');
    }
};

    return {
          number, 
          lastNumber,
          controlls,
    }
}
