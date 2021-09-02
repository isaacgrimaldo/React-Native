import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { styles } from '../themes/appTheme';
import { PersonaScreen } from '../screens/PersonaScreen';

//Forma Correcta de mandar las propiedades
export type RootStackParams =  {
  page1Screen : undefined;
  Page2Screen : undefined;
  Page3Screen : undefined;
  PersonaScreen : { id:number , name:string};
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavegator = () => { 
  return (
    <Stack.Navigator
       // Inidica la pagina de inicio initialRouteName ="Page2Screen"
       screenOptions = {{
         cardStyle:{
           backgroundColor:'black'
         },
         headerStyle:{ elevation:0 , shadowColor:'white'}
       }}
    >
      <Stack.Screen name="page1Screen" options ={{headerTitle:'Page 1 showed' , headerTitleStyle :{...styles.textTitle}}} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options ={{headerTitle:'Page 2 showed' , headerTitleStyle :{ ...styles.textTitle}}}component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options ={{headerTitle:'Page 3 showed' , headerTitleStyle :{ ...styles.textTitle}}}component={Page3Screen} />
      <Stack.Screen name="PersonaScreen" options ={{headerTitle:'' , headerTitleStyle :{ ...styles.textTitle}}}component={PersonaScreen} />
    </Stack.Navigator>
  );
}