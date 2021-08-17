import { useEffect } from 'react';
import { useReducer } from 'react';

/**
*     type son interfaces pero menos escalables con sus propiedades y metodos
*/

interface AuthState { 
     validating: boolean;
     token: string | null;
     userName: string;
     name: string;
};

type LoginPayload = { 
     userName: string;
     name: string;
}


type AuthAction = 
    |{ type: 'logout' }
    |{ type: 'login' , payload: LoginPayload}
    |{ type: 'outSession'};

  
const initialState:AuthState = {
    validating: true,
    token: null,
    userName:'',
    name: '',
}

const authReducer = (state:AuthState , action:AuthAction ):AuthState => {
     
    switch (action.type) {
      case 'logout':
         return {
             validating:false,
             token:null,
             userName:'',
             name:''
         };

      case 'login':
      const { userName, name} = action.payload
       return {
           validating:false,
           token:'sd5df21wedDFDS',
           userName,
           name
       };

       case 'outSession':
         return{
              ...state,
              name:'',
              userName:'',
              token:null,
         }
       
      default:
        return state;
    }
   
} 


const Login = () => {

  const [{ validating, token , name }, dispatch] = useReducer(authReducer, initialState)
  
    useEffect(() => { 
          setTimeout(() =>{
                dispatch({type:'logout'});
          },1500)
    }, [dispatch]);
           
    
    const login = () => {
       dispatch({type:'login', payload:{
            name:'Isaac', 
            userName:'Makotto'
       }})
    }

    const logout = () => {
       dispatch({type:'outSession'});
    }

     if( validating ){
       return(
          <>
            <h2>LOGIN</h2>
           <div className='alert alert-primary'>
               Authenticating... 
           </div>
          </>
       )
     }  

    return (
        <>
           <h2>LOGIN</h2>
               
              {
                   (token)
                   ?
                   (
                    <div className='alert alert-success'> Authenticated as: { name } </div>  
                   )
                   : 
                   (
                    <div className='alert alert-danger'>not Authenticated </div> 
                   )
              }
           
              {
                 (token)
                  ?
                  (
                    <button
                      className='btn btn-danger btn-lg'
                      onClick = { logout }
                    >
                    Logout
                    </button>
                  )
                  :(
                    <button
                      className='btn btn-success btn-lg'
                      onClick = { login }
                    >
                    login
                    </button>
                  )
              }

          
        </>
    )
}


export default Login;