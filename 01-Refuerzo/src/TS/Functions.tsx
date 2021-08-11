
export const Functions = () => {
    
    const suma = (a:number, b:number):number => {
       return a + b;
    }

    return (
        <>
           <h3>Functions in TypesScript</h3> 
         <strong>El resultado es: {suma(20 , 30)}</strong>  
        </>
    )
}
