import React from 'react'
import { Switch } from 'react-native';
import { useState } from 'react';

interface Props {
    value:boolean;
    changeValue: (newValue : boolean) => void;
}

export const CustomSwitch = ({ value ,  changeValue }:Props) => {
    
    const [ controller , setController ] = useState(value)
    const hadlerController = () => {
        setController(!controller);
        changeValue(!controller)
    };
    
    return (
        <>
           <Switch
              trackColor = {{false:'#E70839' , true:'#08E2E7'}}
              thumbColor = {controller ? "#12E708" : "#fff"}
              onValueChange = {hadlerController}
              value = {controller}
            />
        </>
    )
}
