import { StyleSheet,Text,View,FlatList } from "react-native";
import Header from "../../Components/Header"
import Balance from "../../Components/Balance";
import Movements from "../../Components/Movements";
import Actions from "../../Components/Actions";
const list = [
    {
        id:1,
        label:"Boleto Conta de Luz ",
        value: "300,00",
        date:"11/05/2024",
        type:0 // despesas
    },
    {
        id:2,
        label:"Boleto Agua ",
        value: "300,00",
        date:"07/03/2024",
        type:0 // despesas
    },
    {
        id:3,
        label:" Rir",
        value: "30.000,00",
        date:"27/09/2024",
        type: 1 // Receita
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Vitor Gomes"/>
        <Balance saldo="9.250,00" gastos="-527,80"/>
        <Actions/>
        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticaLScrolLIndicator={false}
        renderItem={({item})=> <Movements data={item}/>}
        >
            
        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  title:{
    color:'#595c66',
    fontSize:18,
    fontWeight:'bold',
    margin:18,
  },
  list:{
    marginStart:14,
    marginEnd:14,

  }
});
