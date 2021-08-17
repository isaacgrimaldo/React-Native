import { useEffect, useRef, useState } from "react";
import { ReqRes } from "../../Apis/ReqRes";
import { User, ListReqs } from '../Interfaces/ReqRes';

export const useUsers = () => {
     
    const [users, setUsers ] = useState<User[]>([]);
    const [err, setErr] = useState(false);
    const pagesRef = useRef(1);


    useEffect(() => {
        reqGetData();
    }, [])

    const reqGetData = async () => {
          const resp = await ReqRes.get<ListReqs>('users',{
              params:{
                  page:pagesRef.current
              }
          });

          if(resp.data.data.length > 0){
              setUsers(resp.data.data); 
              setErr(false)
          }else{ 
            setErr(true);
         }
 
    }
       
    const restData = () => {
        pagesRef.current = 1;
        reqGetData();
    }
    
    const nextPage = () =>{
         if(!err){
            pagesRef.current++;
            reqGetData();
         }
    }

    const lastPage = () =>{
         if(!err && pagesRef.current < 1){
             pagesRef.current--;
             reqGetData();
         }else{
             setErr(true);
         }
    }

    return{
        users,
        nextPage,
        lastPage,
        restData,
        err
    }
}
