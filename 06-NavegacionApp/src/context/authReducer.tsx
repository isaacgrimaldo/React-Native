import { AuthState } from './AuthContex';

type AuthActions = |{type:'singIn'}
                   |{type:'changeFavoriteIcon' , payload:string}
                   |{type:'logout'}
                   |{type:'changeUserName' , payload:string }



export const authReducer = ( state: AuthState , action:AuthActions ):AuthState => {
    
    switch (action.type) {
        case 'singIn':
            return{
                ...state,
                isloggedIn:true,
                userName:'not-userName'
            };
        break;
        case 'changeFavoriteIcon':
             return{
                 ...state,
                 favoriteIcon: action.payload
             }    
        break;
        case 'changeUserName':
             return{
                 ...state,
                 userName: action.payload
             }
        break;
        case 'logout':
             return{
                 ...state,
                 isloggedIn:false,
                 userName:undefined,
                 favoriteIcon:undefined
             }
        break; 

        default:
             return state
    }
}
