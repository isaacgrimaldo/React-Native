import axios from 'axios';

 const moviesDB = axios.create({
     baseURL:'https://api.themoviedb.org/3/movie',
     params:{
        api_key:'44f5716948955f2bce8445d4fb5f9cfa',
        language:'es-ES',
     }
 });
 


 export default moviesDB;