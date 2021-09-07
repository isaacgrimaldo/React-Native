import { StyleSheet } from "react-native";


export const colors = {
     primary:'#7100ED',
     Sec: '#ED00E8',
     ter:'#004CED',
     fur:'#DC0037',
     fiv:'#D50A00',
     six:'#006BD5'
} 

 export const styles = StyleSheet.create({
  
    tabsScreen:{
      flex:1.,
      backgroundColor:colors.fur
    },
    globalMargin:{
        marginHorizontal:10,
        marginVertical:20,
        color:'white'
    },
    textTitle:{
        fontSize:35,
        textAlign:'center'
    },
    buttonPrimary:{
      backgroundColor:'#A3244D',
      color:'#22AADD',
      padding:10,
      borderRadius:50,
      margin:20
    },
    buttonPrimaryText:{
       textAlign:'center',
       fontSize:30
    },
    buttonBlue:{
      backgroundColor:'#22AADD',
      color:'#A3244D',
      padding:10,
      borderRadius:50,
      margin:20
    },
    menuContainer:{
      backgroundColor:'#004CED',
    },
    avataImgContent:{
      alignItems:'center',
      marginTop:10,
    },
    avataImg:{
      width:150,
      height:150,
      borderRadius:50,
    },
    menuLinksContainer:{
      padding:10, 
    },
    linkButton:{
       marginHorizontal:15,
       marginVertical:10,
       padding:7,
       backgroundColor:'black',
       borderRadius:10
      },
    linkText:{
     fontSize:30,
     textAlign:'center',
     color:'white'
    },
});