import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../data/Global/colors'
import CardShadow from '../wrapper/CardShadow'

const CategoryItem = ({category, setCategorySelect }) => {
    return (
        <Pressable onPress={()=>setCategorySelect(category)}>
            <CardShadow style={styles.container}>
                <Text>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor: colors.green1,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    }
})