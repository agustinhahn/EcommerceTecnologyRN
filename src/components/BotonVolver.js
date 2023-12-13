import { View, StyleSheet, Text, Pressable} from 'react-native'
import { colors } from '../data/Global/colors'


const BotonVolver = ({setBtnVolver}) => {
    return (
        <Pressable style={styles.goBack} onPress={()=>setBtnVolver(true)}>
            <Text>VOLVER</Text>
        </Pressable>
    )
}

export default BotonVolver

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        margin:10,
        padding:10
    },
    goBack: {
        width: "100%",
        backgroundColor: colors.green1,
        padding: 10,
        paddingStart: 40
    }
})