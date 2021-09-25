import { MovieFull } from '../interfaces/interfaces';
import { MovieDetail } from './MoviesContexts';


type MoviesActions = |{type:'AddMovieDetails', payload:MovieFull}

export const moviesReducer = ( state:MovieDetail , action:MoviesActions ) =>{
   
    switch (action.type) {
        case 'AddMovieDetails':
                 return{
                     ...state,
                 }
                 break;
        
    
        default:
            return state;
    }
}