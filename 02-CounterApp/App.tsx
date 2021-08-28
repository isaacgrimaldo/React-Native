import React from 'react';
import { SafeAreaView } from 'react-native';
// import { PositionsScreeen } from './src/Screens/PositionsScreeen';
// import { DimencionsScreen } from './src/Screens/DimencionsScreen';
// import { BoxObjectModelScreen } from './src/Screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/Screens/HolaMundo';
// import { CounterScreen } from './src/Screens/CounterScreen';
// import { FlexBox } from './src/Screens/FlexBox';
import { HomeWorkScreen } from './src/Screens/HomeWorkScreen';


const App = () => {
  return (
     <SafeAreaView style = {{
       flex:1
     }}>
        <HomeWorkScreen/>
     </SafeAreaView>
  )
}


export default App;