import { View, StyleSheet, Text, FlatList} from 'react-native'
import categories from '../data/categories.json' //importo json
import CategoryItem from './CategoyItem'
import BotonVolver from './BotonVolver'
import Header from './Header'
import {useEffect, useState} from "react"
import App from '../../App'
import Search from '../components/Search'
import allCategories from '../data/categories.json'

const Categories = ({setCategorySelect,setOption1}) => {

    const [btnVolver, setBtnVolver] = useState("")

    const [keyword, setKeyword] = useState("")
    const [catSelect, setcatSelect] = useState(allCategories)

    useEffect(()=>{
        const productSelect = allCategories.filter(product => product.includes(keyword))
        setcatSelect(productSelect)
    },[keyword])


    return (
        <>
            {btnVolver ?
            setOption1(false)
            :
            <>
            <Header title='ALL CATEGORIES' />
            <BotonVolver setBtnVolver={setBtnVolver} setCategorySelect={setCategorySelect}/>
            <Search setKeyword={setKeyword}/>
            <FlatList
            style = {styles.container}
            data = {catSelect} //data que quiero recorrer
            keyExtractor={item => item} //clave, en este caso un valor de la lista
            renderItem={({item})=> <CategoryItem category={item} setCategorySelect={setCategorySelect} />} //renderizar mediante la funcion
            />
            </>
            }
        </>

    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        width:"100%",
    }
})