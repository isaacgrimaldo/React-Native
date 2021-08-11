import React, { useState } from 'react'

const Contador = () => {

    const [counter, setcounter] = useState(0);
    
    const accumulateCounter = (num:number) =>{
         setcounter( c => c + num );
    };

    return (
        <>
          <h2>Counter <strong >: {counter}</strong> </h2>
            <button className='btn btn-primary m-4'
              onClick = { () => accumulateCounter(1) }
            >
                   +1
            </button>
            <button className='btn btn-danger'
              onClick= { () => accumulateCounter(-1)}
            >
                 -1
            </button>
        </>
    )
}


export default Contador;