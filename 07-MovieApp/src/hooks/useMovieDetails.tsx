import { useEffect, useState } from "react"
import moviesDB from "../api/MoviesDB";
import { MovieFull } from '../interfaces/interfaces';
import { Cast, CastResponse } from '../interfaces/castInterfaces';

interface MovieDetail {
    islodding:boolean,
    movieFull ?:MovieFull,
    cast:Cast[],
}

export const useMovieDetails = ( id:number ) => {
   
    const [movieDetail, setMovieDetails] = useState<MovieDetail>({
        islodding : true,
        movieFull : undefined,
        cast : [],
    });


    const getDetailsMovie = async() => {      
        
        try{
            
           const movieDetailResp =   moviesDB.get<MovieFull>(`/${id}`);
           const movieCastReap   =   moviesDB.get<CastResponse>(`/${id}/credits`); 

           const [ details ,  cast ] =  await Promise.all([
               movieDetailResp,
               movieCastReap,
           ])

           setMovieDetails({
               islodding : false,
               movieFull : details.data,
               cast:cast.data.cast,
           })

        } catch (err) {
            console.log('Data-ERROR');
        }
    }

    useEffect(() => {
       getDetailsMovie()
    }, [])

    return{
        ...movieDetail
    }
}