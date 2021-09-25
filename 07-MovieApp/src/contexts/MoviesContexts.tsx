import React ,  {  createContext, useReducer } from "react";
import { MovieFull } from "../interfaces/interfaces";
import { moviesReducer } from './moviesReducer';

 export interface MovieDetail {
   movieFull:MovieFull | undefined ,
   islodding:boolean,
};

// export interface MovieState {
//     movieDetails:MovieDetail
// };

export const initialMovieDetails:MovieDetail = {
        movieFull:undefined,
        islodding:false
};

export interface MovieStateContextProps {
     movieState:MovieDetail,
};


export const MoviesContext = createContext( {} as MovieStateContextProps );

export const MovieProvider = ({ children }:{children: JSX.Element}) => {
    
   const [ movieState , dispatch] = useReducer( moviesReducer , initialMovieDetails)

    return(
        <MoviesContext.Provider
           value ={ {
                movieState
           }}
        >
            {  children }
        </MoviesContext.Provider>
    )
} 

