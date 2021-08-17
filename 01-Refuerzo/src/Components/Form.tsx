import { useForm } from "./Hooks/useForm"

export const Form = () => {

    const {state ,  onChange} = useForm(
        {
            email:'test@gmail.com',
            password:'password'
        }
    )
    
    const {email , password} = state;

    return (
        <>
           <form>
               <input
                 type='text'
                 name='email'
                 className='form-control mt-2 mb-2'
                 placeholder='Email'
                 value = {email}
                 onChange = { ({ target }) => { onChange( target.value, 'email') } }
               />

               <input 
               type="text" 
               name='password'
               className='form-control'
               placeholder='Password'
               value = {password}
               onChange = { ({ target }) => { onChange( target.value, 'password') } }
               />
           </form>  
        </>
    )
}
