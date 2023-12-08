import { View, StyleSheet, Text, Pressable} from 'react-native'

const InitOptions = ({setOption , option}) => {

    return (
        <Pressable style={styles.container} onPress={()=>setOption(true)}>
            <Text style={styles.textOp}>{option}</Text>
        </Pressable>
    )
}

export default InitOptions

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        margin:10,
        padding:10
    },
    textOp:{
        fontSize: 18,
        color:"white"
    }
})