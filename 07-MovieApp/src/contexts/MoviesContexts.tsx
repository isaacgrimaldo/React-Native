import React ,  {  createContext, useReducer } from "react";
import { MovieFull } from "../interfaces/interfaces";
import { colorsReducer } from './colorsReducer';

 export interface MovieDetail {
   movieFull:MovieFull | undefined ,
   islodding:boolean,
};

// export interface MovieState {
//     movieDetails:MovieDetail
// };

export interface GrandientColors {
    primaryColor:string ; 
    sencundaryColor:string ;
    prePrimaryColor:string;
    perSecColor:string;
}

export const initialGradientColors:GrandientColors = {
        primaryColor:'transparent',
        sencundaryColor:'transparent',
        prePrimaryColor:'transparent',
        perSecColor:'transparent',
};

export interface GrandientContextProps {
      grandientColors: GrandientColors,
      getGradientColors: () => void;
      setGradientColors:(payload:GrandientColors) => void;
};


export const MoviesContext = createContext( {} as GrandientContextProps );

export const MovieProvider = ({ children }:{children: JSX.Element}) => {
    
   const [ grandientColors , dispatch] = useReducer( colorsReducer , initialGradientColors)
     
   const getGradientColors = () => dispatch ({type:'get'});

   const setGradientColors = (payload:GrandientColors) => {dispatch({type:'set',payload})}

    return(
        <MoviesContext.Provider
           value ={ {
              grandientColors,
              setGradientColors,
              getGradientColors,  
           }}
        >
            {  children }
        </MoviesContext.Provider>
    )
} 

