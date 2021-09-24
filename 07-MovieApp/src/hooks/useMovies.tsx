import { useEffect, useState } from "react"
import moviesDB from "../api/MoviesDB";
import { Movies, MoviesDBResponse } from '../interfaces/interfaces'

interface ListMovies {
    playNow:Movies[];
    popular:Movies[];
    topRated:Movies[];
    upComing:Movies[];
}

export const useMovies = () => {
    
   const [listMovies, setlistMovies] = useState<ListMovies>({
    playNow:[],
    popular:[],
    topRated:[],
    upComing:[],
   });

   const [isloading, setisloading] = useState(true);

   const getMovies = async() => {
        
    const valueplayNow =   (await moviesDB.get<MoviesDBResponse>('/now_playing')).data;
    const valuepopular =   (await moviesDB.get<MoviesDBResponse>('/popular')).data;
    const valuetopRated =  (await moviesDB.get<MoviesDBResponse>('/top_rated')).data; 
    const valueupComing =  (await moviesDB.get<MoviesDBResponse>('/upcoming')).data;
       
    try {
        
         const resp = await Promise.all([
             valueplayNow,
             valuepopular,
             valuetopRated,
             valueupComing
         ]);
           
         console.log(resp);
         setlistMovies({
             playNow: resp[0].results,
             popular: resp[1].results,
             topRated: resp[2].results,
             upComing: resp[3].results
         })
         setisloading(false);

       }catch{
           console.log('Not-Data');
       }           
   }
    

    useEffect(() => {
        getMovies();             
    },[])
    
    return{
        ...listMovies,
        isloading,
    }
}
