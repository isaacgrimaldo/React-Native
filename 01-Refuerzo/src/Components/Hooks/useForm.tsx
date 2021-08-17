import { useState } from "react"

export const useForm = <T extends Object>( formValues: T ) => {
     
    const [state, setstate] = useState(formValues);

    const onChange = ( value:string , name: keyof T ) => {

         setstate({
             ...state,
             [name]: value
         });    
    }; 

    return { 
        state,
        onChange
    }
     
}
