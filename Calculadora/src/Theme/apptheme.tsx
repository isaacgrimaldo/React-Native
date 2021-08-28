import {StyleSheet} from 'react-native';

export  const styles = StyleSheet.create({
    backGround:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'flex-end'
    },
    text:{
        color:'white',
        fontSize: 20
    },
    calculadoraContainer:{
      paddingHorizontal:10
    },
    textResult:{
        color:'white',
        fontSize:35,
        textAlign:'right',
        letterSpacing:2
    },
    textminResult:{
        color:'rgba(255, 255, 255,0.5)',
        fontSize:20,
        textAlign:'right',
        letterSpacing:2
    },
    buttonContainer:{
        width:80,
        height:80,
        backgroundColor:'#9B9B9B',
        justifyContent:'center',
        borderRadius:50
    },
    buttonText:{
     textAlign:'center',
     fontWeight:'600',
     fontSize:30,
     color:'black',
    },
    
})
