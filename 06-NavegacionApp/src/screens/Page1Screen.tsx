import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View , TouchableOpacity} from 'react-native'
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any>{}; 

export const Page1Screen = ({ navigation } :Props) => {
    return (
        <View style = { styles.globalMargin }>
             <Button
                title="Ir a pagina 2"
                onPress ={ () => navigation.navigate('Page2Screen')}
                
             />

            <TouchableOpacity
                 onPress = { () => navigation.navigate('PersonaScreen', {
                    name:'Isaac',
                    id:1
                 })}
                 style = { styles.buttonBlue }
             >
                 <Text style = { styles.buttonPrimaryText}>Isaac</Text>
             </TouchableOpacity>

             <TouchableOpacity
                 onPress = { () => navigation.navigate('PersonaScreen', {
                    name:'Melissa',
                    id:10
                 })}
                 style = { styles.buttonPrimary }
             >
                 <Text style = { styles.buttonPrimaryText}>Melisaa</Text>
             </TouchableOpacity>

        </View>
    )
}
