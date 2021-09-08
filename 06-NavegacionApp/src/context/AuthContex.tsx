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
    changeUserName:(name:string) => void;
    changeFavoriteIcon:(iconName:string) => void;
    logout:() => void;
}

//Creamos el context
export const AuthContext = createContext(  {} as AuthContextProps );


//Componente Provedor del context   
export const AuthProvider = ( { children }:{ children: JSX.Element} /**Puede ser any tambien*/) => {
   
    const [ authState  , dispatch] = useReducer( authReducer , authInitialState );

    const singIn = () => dispatch({type:'singIn'});
    
    const changeFavoriteIcon = (iconName:string) => dispatch({type:'changeFavoriteIcon', payload:iconName})
   
    const logout = () => dispatch({ type:'logout' });
    
    const changeUserName = (name:string) => dispatch({type:'changeUserName', payload:name})

    return(
      <AuthContext.Provider 
        value = {{
          authState,
          singIn,           
          changeFavoriteIcon,
          logout,
          changeUserName,
        }}
      >
           {children}
      </AuthContext.Provider>
   )
}



