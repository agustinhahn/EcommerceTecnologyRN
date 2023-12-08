
import { View, StyleSheet, Pressable, TextInput, Text} from 'react-native'
import { colors } from "../data/Global/colors"
import { AntDesign, Entypo} from '@expo/vector-icons';
import {useState} from "react"


const Search = ({setKeyword}) => {

    const [input, setInput] = useState("")
    const [error,setError] = useState("")

    const search = () =>{
        const expression = /.*[0-9].*/
        if(expression.test(input)){
            setError("no debe contener numeros")
        }
        else{
            setKeyword(input)
        }
    }

    return (
        <View>
            <View style= {styles.container}>
                <TextInput style={styles.input} placeholder="Buscar" value={input} onChangeText={(t)=>setInput(t)} />
                <Pressable onPress={search}>
                    <AntDesign name="search1" color="black" size={25} />
                </Pressable>
                <Pressable onPress={()=>{setInput("")}}> 
                    <Entypo name="circle-with-cross" color="black" size={25} />
                </Pressable>
            </View>
            {error ? <Text>{error}</Text> : null}
        </View>

    )
}
export default Search

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    input: {
        backgroundColor: colors.green1,
        width: "70%",
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10
    }
})