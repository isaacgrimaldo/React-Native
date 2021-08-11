
const Login = () => {
    return (
        <>
           <h2>LOGIN</h2>
           <div className='alert alert-primary'>
               Authenticating... 
           </div>
           <div className='alert alert-danger'>
               not Authenticated
           </div> 
           <div className='alert alert-success'>
                Authenticated
           </div>     

           <button
             className='btn btn-success btn-lg '
           >
             Login
           </button>

           <button
             className='btn btn-danger btn-lg'
           >
             Logout
           </button>
        </>
    )
}


export default Login;