
import { User } from "./Interfaces/ReqRes";
import { useUsers } from './Hooks/useUsers';

const Usuarios = () => {
    
    const {users, nextPage, lastPage, restData, err } = useUsers();
    
    const renderIteam = (usuario:User) => {
        const { first_name , last_name, email, id, avatar } = usuario;

        return(
            <tr key={id.toString()}>
                <td>
                    <img 
                    src={avatar} 
                    alt={first_name}
                    style={{ 
                        width:'50',
                        borderRadius:'50%',
                        boxShadow: '0 15px 15px '
                     }} 
                    />
                </td>
                <td>
                    {first_name} {last_name}
                </td>
                <td>
                    {email}
                </td>
            </tr>
        )
    };

    return (
        <>
           <h3>Usuarios</h3>
           <table className ='table'>
               <thead>
                   
               </thead>
               <tbody>
                    {
                        
                           (err)
                           ?(
                            <tr>
                                <td>
                                  <h2 className='text-danger'>
                                      Sin Informacion
                                  </h2>
                                </td>
                            </tr> 
                          ) 
                          :users.map(renderIteam)
                            
                    }  
               </tbody>
           </table>  
           {
              (err)
              ?
              (
                 <button
                  className="btn btn-success"
                  onClick = {restData}
                 >
                  Home    
                 </button>
              )
              :
              (
            <>
                <button
                className="btn btn-primary"
                onClick = {lastPage}
               >
                 Anterior
               </button>
               <button
                 className="btn btn-warning"
                 onClick={nextPage}
               >
                  Siguiente 
               </button>
            </>
              )
          
           }           
        </>
    )
}


export default Usuarios;