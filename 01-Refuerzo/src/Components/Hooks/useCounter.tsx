import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
    
    const [counter, setcounter] = useState(initialValue);
    
    const accumulateCounter = (num:number) =>{
         setcounter( c => c + num );
    };
     
   const resetCounter = () =>{
        setcounter( initialValue );
   } 

   return {
       counter,
       accumulateCounter,
       resetCounter
   }
}


export  default useCounter;