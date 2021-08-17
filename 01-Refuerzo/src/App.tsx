
// Cuando se esta usando TS no es necesaria la importacion de React
// import ObjetosLiterales from './TS/ObjetosLiterales';
// import TiposBasicos from './TS/TiposBasicos';

// import Contador from "./Components/Contador";
// import ContadorConHook from "./Components/ContadorConHook";
// import { Functions } from "./TS/Functions";
// import Login from "./Components/Login";
import Usuarios from "./Components/Usuarios";
import { Form } from './Components/Form';

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
         {/* <Login/> */}
         {/* <Usuarios /> */}
         <Form/>
    </div>
  ) 
}

export default App;
