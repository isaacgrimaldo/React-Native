
// Cuando se esta usando TS no es necesaria la importacion de React
// import ObjetosLiterales from './TS/ObjetosLiterales';
// import TiposBasicos from './TS/TiposBasicos';

import Contador from "./Components/Contador";
import ContadorConHook from "./Components/ContadorConHook";
import Login from "./Components/Login";
import { Functions } from "./TS/Functions";

const App = () => {
  return (
    <div className="mt-2">
         <h1>Introduccion a REACT+TS</h1>
         <hr/>
         {/* <TiposBasicos/> */}
         {/* <ObjetosLiterales/> */}
         {/* <Functions/> */}
         {/* <Contador/> */}
         {/* <ContadorConHook/> */}
         <Login/>
    </div>
  ) 
}

export default App;
