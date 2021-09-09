import { useEffect, useState } from "react"
import moviesDB from "../api/MoviesDB";
import { Movies, MoviesDBNowPlay } from '../interfaces/interfaces';

export const useMovies = () => {
    
   const [cinemaMovies, setcinemaMovies] = useState<Movies[]>([]);
   const [isloading, setisloading] = useState(true);
   
   const getMovies = async() => {
       try {
         const  resp =  (await moviesDB.get<MoviesDBNowPlay>('/now_playing')).data;
         setcinemaMovies(resp.results);
         setisloading(false);
       }catch{
           console.log('Not-Data');
       }           
   }
    

    useEffect(() => {
        getMovies();             
    },[])
    
    return{
        cinemaMovies,
        isloading,
    }

}
