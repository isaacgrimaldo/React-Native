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
      paddingHorizontal:10,
    },
    textResult:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        letterSpacing:2,
    },
    textminResult:{
        color:'rgba(255, 255, 255,0.5)',
        fontSize:30,
        textAlign:'right',
        letterSpacing:2
    },
    keyboardContainer:{
        paddingVertical:10,
    },
    fila:{
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
})
