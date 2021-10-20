import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { HeaderMenuItem, Item, SeparatorItem } from './MenuItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { textColor } from '../../theme/appTheme';

const menuItems: Item[] =[
    {
      name:'App1',
      icon:'bar-chart-outline',
      component:'anmation010'
    },
    {
      name:'App2',
      icon:'arrow-redo-circle-outline',
      component:'anmation210'
    },
    {
      name:'App4',
      icon:'build-outline',
      component:'anmation510'
    },
    {
      name:'App5',
      icon:'toggle-outline',
      component:'swichtS'
    },
    {
      name:'App6',
      icon:'alert-outline',
      component:'AlertScreen'
    }
]
  

export const FlatListComp = () => {
  
  const navigation =  useNavigation()
  
  const MenuItem = ({name , icon , component  }: Item) => {
    
  return (
        <TouchableOpacity
          onPress = { () => navigation.navigate(component as any)}
        >
            <View style ={ styles.itemContainer}>
                <View style={styles.iteminterContainer}>
                    <Icon name={icon} size={styles.itemText.fontSize}  color='#fff'  />
                    <Text style={styles.itemText}>{name}</Text>
                </View>

                    {/* other way <View style={{flex:1}}></View> */}

                <View>
                    <Icon  name='caret-forward-outline' size={20} color={textColor.thr}/>
                </View>
            </View>
        </TouchableOpacity>
    ) 
  }

  return(
       <FlatList
         data={menuItems}
         renderItem={( {item , index } ) => MenuItem({ ...item }) }
         ListHeaderComponent={() => HeaderMenuItem({title:'Menu Items'}) } 
         ItemSeparatorComponent = {() => SeparatorItem() }
         keyExtractor={(item) => item.name}  
       />
  )
}


const styles = StyleSheet.create({
  itemContainer:{
       flex:1,
       marginHorizontal:20,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       borderRadius:50
  },
  iteminterContainer:{
     flex:1,
     flexDirection:'row',
  },
  itemText:{
      fontSize:20,
      marginHorizontal:10
  }
});

