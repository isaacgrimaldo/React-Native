import React from 'react';
import { StyleSheet, View, Dimensions, Text ,  useWindowDimensions } from 'react-native';

interface Scale {
    scale?: 'x' | 'y' ;  
}

 export const DimencionsScreen = () => {
    
    // const {width:StaticWidth ,  height : StaticHeight } = Dimensions.get('window');
    let { width: currentWidth, height: currentHeight } =  useWindowDimensions();
    
    const getPorcetage = (   porcetage:number , {scale = 'x' }:Scale   ): string => {

       let gotPorcetage:any = 0 ;

         if( scale === 'x'){
             gotPorcetage =   currentWidth * porcetage/100;
             gotPorcetage = gotPorcetage.toString();
         }else{
            gotPorcetage =   currentHeight * porcetage/100;
            console.log(gotPorcetage);
            gotPorcetage = gotPorcetage.toString() ;
         }

         return gotPorcetage ;
    }
    
  
    return(
       <View style = { styles.container }>
           <View style = { styles.containerBox}>
            <View style ={{
                  width: '100%',
                  height: '15%',
                  backgroundColor:'#fff'
                }}>
                <Text> sdsd  </Text>
            </View>
            <View/> 
           </View>
           <View>
               {/* <Text style = { styles.dimensionsText }>Static-Dimensions x:{StaticWidth.toFixed(2)} and y:{StaticHeight.toFixed(2)}</Text> */}
               <Text style = { styles.dimensionsText }>Current-Dimensions x:{currentWidth.toFixed(2)} and y:{currentHeight.toFixed(2)}</Text>
           </View>
       </View>
   )
};


const styles = StyleSheet.create({
     
    container: {
         width:'100%',
         height:'100%',
         backgroundColor:'#0070CF'
     },
     
     containerBox:{
         width:'100%',
         height:'80%',
         backgroundColor:'#004'
     },

     purpleBox:{
         width:'100%',
         backgroundColor:'#3300CF'
     },

     dimensionsText: {
         fontSize: 20,
         textAlign:'center',
         color:'#FFFFFF'
     }

});