
import Header from '../../components/Header'
import Search from '../../components/Search';
import { FlatList, View, Text, StyleSheet} from 'react-native'
import allProducts from "../products.json"
import {useEffect, useState} from "react"
import ProductItem from '../../components/ProductItem';
import App from '../../../App'
import Volver from '../../components/BotonVolver'

const ItemListCategories = ({category}) => {

    const [btnVolver, setBtnVolver] = useState("")

    const [keyword, setKeyword] = useState("")
    const [products, setProducts] = useState(allProducts)

    useEffect(()=>{
        if(category){
            const productsCategory = allProducts.filter(product => product.category === category)
            const productFiltered = productsCategory.filter(product => product.title.includes(keyword))
            setProducts(productFiltered)
        }
        else{
            const productFiltered = allProducts.filter(product => product.title.includes(keyword))
            setProducts(productFiltered)
        }
    },[keyword])


    return (
        <>
            {btnVolver?
            <App />
            :
            <>
            <Header title='ALL PRODUCTS'/>
            <Search setKeyword={setKeyword}/>
            <Volver setBtnVolver={setBtnVolver} />
            <FlatList 
            style={styles.container}
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item})=> <ProductItem item={item}/>}
            />
            </>
        }
        </>

    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})