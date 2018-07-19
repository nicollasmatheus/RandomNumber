import React from 'react'
import {
  Text,
  AppRegistry,
  View,
  Button,
  StyleSheet,
  TouchableOpacity

} from 'react-native'

const estilo = {
  texto: {
    fontSize:50,
    backgroundColor: '#53ff1a',
    marginVertical: 300,
    color: 'white',
    padding: 20,
    textAlign: 'center',
    shadowColor: '#d9d9d9',
    shadowOffset: {width:0, height:10},
    shadowOpacity: 1,
    shadowRadius: 1,
    // fontStyle: 'italic',
    fontWeight: 'bold'
   },
   estiloBotao: {
     backgroundColor: "white",
     padding:20,
     shadowColor: "#53ff1a",
     shadowOffset: {width:0, height:2},
     shadowOpacity: 0.5,
     borderColor: "#53ff1a",
     borderWidth: 0.5,
     borderRadius: 8
     

   },
   textoBotao: {
     fontSize: 30,
     color: "#53ff1a",
     fontWeight: 'bold',
     textAlign: 'center'
   }
}

const gerarNumeroAleatorio = () => {
  var numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio*10)
  alert(`O numero sorteado foi: ${numeroAleatorio}`)
}

const App = () => {
  const {texto, estiloBotao, textoBotao} = estilo 
  return (
    <View>
      {alert('Olá seja bem-vindo ao Par ou Impar v1. Desenvolvedor: Nicollas Linhares')}
      <Text style={texto}>Par ou Ímpar</Text>
      <TouchableOpacity style={estiloBotao}>
        <Text style={textoBotao}>Gerar</Text>
      </TouchableOpacity>
      {/* <Button title="Gerar" onPress={gerarNumeroAleatorio} color="#841584"/> */}

    </View>
  )
}

AppRegistry.registerComponent('app1', () => App)
