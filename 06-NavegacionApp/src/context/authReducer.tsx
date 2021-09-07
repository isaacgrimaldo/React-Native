import { AuthState } from './AuthContex';

type AuthActions = |{type:'singIn'}
                   |{type:'sing'}

export const authReducer = ( state: AuthState , action:AuthActions ):AuthState => {
    
    switch (action.type) {
        case 'singIn':
            return{
                ...state,
                isloggedIn:true,
                userName:'not-userName'
            };
        break;
        
        default:
             return state
    }
}
