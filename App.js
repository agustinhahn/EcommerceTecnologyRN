import { StyleSheet, Text, View } from 'react-native';
import Home from './src/data/Screen/Home'
import ItemListCategories from './src/data/Screen/ItemListCategories'
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import ItemDetail from './src/data/Screen/ItemDetail';
import { useState } from 'react';
import ProductItem from './src/components/ProductItem';
import CategoryItem from './src/components/CategoyItem';

const App = () => {

  const [categorySelect, setCategorySelect] = useState("")
  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)

  return (
    <View style={styles.container}>
      {option1 || option2 ?
        option1 ?
        <Categories category = {categorySelect}  />
        :
        <ItemListCategories category = {categorySelect} />
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