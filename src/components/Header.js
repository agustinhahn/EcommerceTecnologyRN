import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import {colors} from '../data/Global/colors'

const Header = ({title= "producto"}) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: "red",
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },

})