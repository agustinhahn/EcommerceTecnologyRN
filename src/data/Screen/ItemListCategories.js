
import Header from '../../components/Header'
import Search from '../../components/Search';
import { FlatList, View, Text, StyleSheet} from 'react-native'
import {useEffect, useState} from "react"
import ProductItem from '../../components/ProductItem';
import Volver from '../../components/BotonVolver'

const ItemListCategories = ({category,setOption2, setProductDetailId, products, setProducts, option2}) => {

    const [btnVolver, setBtnVolver] = useState("")
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        if(category){
            const productsCategory = products.filter(product => product.category === category)
            const productFiltered = productsCategory.filter(product => product.title.includes(keyword))
            setProducts(productFiltered)
        }
        else{
            const productFiltered = products.filter(product => product.title.includes(keyword))
            setProducts(productFiltered)
        }
    },[keyword])

    return (
        <>
            {btnVolver?
                option2?
                setOption2(false)
                :
                setProducts(products)
            :
            <>
            <Header title='ALL PRODUCTS'/>
            <Volver setBtnVolver={setBtnVolver} />
            <Search setKeyword={setKeyword}/>
            <FlatList 
            style={styles.container}
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item})=> <ProductItem item={item} setProductDetailId={setProductDetailId}/>}
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