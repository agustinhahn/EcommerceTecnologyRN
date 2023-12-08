import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

const ItemDetail = () => {
    return (
        <View styles ={styles.container}>
            <Text>algo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})


export default ItemDetail