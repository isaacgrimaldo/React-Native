import React from 'react';
import { SafeAreaView } from 'react-native';
import { PositionsScreeen } from './src/Screens/PositionsScreeen';
// import { DimencionsScreen } from './src/Screens/DimencionsScreen';
// import { BoxObjectModelScreen } from './src/Screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/Screens/HolaMundo';
// import { CounterScreen } from './src/Screens/CounterScreen';


const App = () => {
  return (
     <SafeAreaView style = {{
       flex:1
     }}>
         <PositionsScreeen/> 
     </SafeAreaView>
  )
}


export default App;