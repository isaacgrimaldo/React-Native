import React , { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// difimos la informacion que tendra 
export interface AuthState {
    isloggedIn:boolean;
    userName?:string;
    favoriteIcon?:string
};

//Estado inicial
export const authInitialState: AuthState ={ 
    isloggedIn:false,
    userName:undefined,
    favoriteIcon:undefined,
};


//definimos  la estructura del context
export interface AuthContextProps{
    authState: AuthState;
    singIn:() => void;
}

//Creamos el context
export const AuthContext = createContext(  {} as AuthContextProps );


//Componente Provedor del context   
export const AuthProvider = ( { children }:{ children: JSX.Element} /**Puede ser any tambien*/) => {
   
    const [ authState  , dispatch] = useReducer( authReducer , authInitialState );

    const singIn = () => dispatch({type:'singIn'});

    return(
      <AuthContext.Provider 
        value = {{
          authState,
          singIn           
        }}
      >
           {children}
      </AuthContext.Provider>
   )
}



