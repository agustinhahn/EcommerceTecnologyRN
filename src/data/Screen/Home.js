import { View, StyleSheet, Text} from 'react-native'
import Header from "../../components/Header"
import Categories from '../../components/Categories'
import InitOptions from '../../components/InitOptions'

const Home = ({setOption1,setOption2}) => {
    return (
        <>
            <Header title='ELECTRONIC-PROD' />
            <InitOptions option="BUSCAR POR CATEGORIA" setOption={setOption1} />
            <InitOptions option="BUSCAR POR PRODUCTO" setOption={setOption2}/>
            {/* <Categories setCategorySelect={setCategorySelect}  /> */}
        </>
    )
}

const styles = StyleSheet.create({
})

export default Home