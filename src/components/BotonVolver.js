import { View, StyleSheet, Text, Pressable} from 'react-native'


const BotonVolver = ({setBtnVolver}) => {
    return (
        <Pressable style={styles.container} onPress={()=>setBtnVolver(true)}>
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
})