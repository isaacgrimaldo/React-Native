import  useCounter  from './Hooks/useCounter';

const ContadorConHook = () => {
     
   const {counter , accumulateCounter , resetCounter } = useCounter(20);  
      
    return (
        <>
          <h2>Counter <strong >: {counter} </strong> </h2>
            <button className='btn btn-primary m-4'
              onClick = { () => accumulateCounter(1) }
            >
                   +1
            </button>

            <button className='btn btn-danger m-4'
              onClick= { () => accumulateCounter(-1)}
            >
                 -1
            </button>
        
            <button className='btn btn-warning'
              onClick= { () => resetCounter()}
            >
                reset
            </button>

        </>
    )
}


export default ContadorConHook;