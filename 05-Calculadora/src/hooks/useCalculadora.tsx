import { useState } from "react";


export const useCalculadora = () => {
    
    const [number, setnumber] = useState('100');
    const [lastNumber, setlastNumber] = useState('0')


    return {
          number, 
          lastNumber
    }
}
