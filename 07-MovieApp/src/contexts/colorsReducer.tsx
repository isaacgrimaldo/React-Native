import { GrandientColors, initialGradientColors } from "./MoviesContexts";
 
type ActionsProps = |{type:'get'}
                    |{type:'set', payload:GrandientColors}

 
export const colorsReducer = (state:GrandientColors,  action:ActionsProps ) => {
    
     switch (action.type) {
        
        case 'get':
            return {
                ...state
            }
            break;

        case 'set':
             return{
                 ...state,
                 ...action.payload  
             }
        default:
             return state
            break;
    }
}
