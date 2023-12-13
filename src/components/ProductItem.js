import { FlatList, View, Text, StyleSheet, Image, Pressable,useWindowDimensions } from 'react-native'
import { colors } from '../data/Global/colors'

const ProductItem = ({ item, setProductDetailId}) => {

    const {width} = useWindowDimensions()


    return (
        <Pressable style={styles.container} onPress={() => setProductDetailId(item.id)}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <Text>{item.title}</Text>
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 100,
        backgroundColor: colors.green1,
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30
    },
    text: {
        width: "60%",
        textAlign: "center",
        fontSize: 20
    },
    textMin: {
        width: "60%",
        textAlign: "center",
        fontSize: 15
    },
    image: {
        minWidth: 90,
        height: 90,
        width: "30%"
    }
})