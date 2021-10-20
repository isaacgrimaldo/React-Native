import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderMenuItem } from '../components/flatlist/MenuItem';

interface State {  
    isActive : boolean;
    isHungry : boolean;
    isHappy : boolean;
} 


export const SwitchScreen = () => {
    
    const [state, setstate] = useState<State>({
        isActive: false,
        isHungry: false,
        isHappy: false,
    })
    
    const { isActive, isHungry, isHappy } = state; 

    const changeState = (newValue:boolean , field: keyof State) => {
          setstate({
              ...state,
              [field]: newValue
          })
    }

    return (
        <View>
            <HeaderMenuItem title='Switches'/>

             <View style={styles.switchRow}>
                 <Text style={styles.switchText}>isActive</Text>
                 <CustomSwitch value={isActive} changeValue={(value) => changeState( value , 'isActive') } />
             </View>  

             <View style={styles.switchRow}>
                 <Text style={styles.switchText}>isHungry</Text>
                 <CustomSwitch value={isHungry} changeValue={(value) => changeState( value , 'isHungry') } />
             </View> 

             <View style={styles.switchRow}>
                 <Text style={styles.switchText}>isHappy</Text>
                 <CustomSwitch value={isHappy} changeValue={(value) => changeState( value , 'isHappy') } />
             </View>

            <View>
                 <Text style={styles.switchText}>{JSON.stringify(state, null , 5)}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
     switchRow:{
         flexDirection:'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginVertical:5
     },
     switchText:{
         fontSize:20
     }

});
