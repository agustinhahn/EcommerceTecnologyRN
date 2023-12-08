import { FlatList, View, Text, StyleSheet, Image} from 'react-native'

const ProductItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                resizeMode='cover'
                source={{uri:item.thumbnail}}
            />
            <Text>{item.title}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "yellow",
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"start",
        gap: 30
    },
    image:{
        width: 50,
        height:50,
    }
})