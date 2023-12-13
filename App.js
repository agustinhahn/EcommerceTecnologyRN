import { StyleSheet, Text, View } from 'react-native';
import Home from './src/data/Screen/Home'
import ItemListCategories from './src/data/Screen/ItemListCategories'
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import ItemDetail from './src/data/Screen/ItemDetail';
import { useEffect, useState } from 'react';
import ProductItem from './src/components/ProductItem';
import CategoryItem from './src/components/CategoyItem';
import allProducts from './src/data/products.json'

const App = () => {

  const [categorySelect, setCategorySelect] = useState("")
  const [productDetailId,setProductDetailId] = useState(0)
  const [categoryFilter, setCategoryFilter] = useState("")
  const [products, setProducts] = useState(allProducts)
  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)

  useEffect(()=>{
    const productCategoryFilter = allProducts.filter(products => products.category === categorySelect )
    setCategoryFilter(productCategoryFilter)
  },[categorySelect])

  return (
    <View style={styles.container}>
      {option1 || option2 ?
        option2 ?
        productDetailId != 0 ? 
            <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId} setCategorySelect={setCategorySelect}/>
            :
            <ItemListCategories category = {categorySelect} setOption2={setOption2} setProductDetailId={setProductDetailId} products={products} setProducts={setProducts} option2={option2}/>
        :
        categoryFilter != "" ?
        <ItemListCategories category = {categorySelect} setOption2={setOption2} setProductDetailId={setProductDetailId} products={categoryFilter} setProducts={setCategoryFilter} option2={option2}/>
        :
        <Categories category = {categorySelect} setOption1={setOption1} setCategorySelect={setCategorySelect}/>
      :
      <Home setOption1={setOption1} setOption2={setOption2} />
    }
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});