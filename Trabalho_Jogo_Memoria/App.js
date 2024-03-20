import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BotaoInicio from './componentes/BotaoInicio'
import Sequencia from './componentes/Sequencia.js'

export default function App() {
  const [mostrarSequencia, setMostrarSequencia] = React.useState(false)
  const [mostrarInput, setMostrarInput] = React.useState(false)
  const [mostrarParabens, setMostrarParabens] = React.useState(false)
  const [mostrarErro, setMostrarErro] = React.useState(false)
  const [text, setText] = useState('')
  const [esperado, setEsperado] = useState('')

  let nivel = 1

  const receberValor = (valor) => {
    setEsperado(esperado => valor);
  };
  

  const receberText = () => {
    setText(text)
  }
  

  
  const handleBlur = () => {
    setMostrarInput(false);
    if(text == esperado) {
      setMostrarParabens(true)
      setMostrarErro(false);
      nivel++;
    }
    else {
      setMostrarErro(true);
      setMostrarParabens(false)
      nivel=0
    }

   

  }
   
  return (
    <View style={styles.container}>
      {mostrarSequencia && <Sequencia min={100000*nivel} max={100000*(nivel+1)} onValorGerado={receberValor}/>}

      <Text/>

      <BotaoInicio 
        label="Ver sequência"
        onClick = {()=>{
          setMostrarSequencia(true)
          setMostrarErro(false)
          setMostrarParabens(false)
          //setTimeout(()=>{setMostrarSequencia(false)}, 3000)
          setTimeout(()=>{setMostrarInput(true)}, 3000)
        }}
      />

      <Text/>

      {mostrarInput && <TextInput
                        placeholder="Digite o valor da sequência"
                        onChangeText={receberText}
                        onBlur={handleBlur}
                      />
      }

      {mostrarParabens && <Text>Parabéns, você acertou a sequência</Text>}
      {mostrarErro && <Text>Você errou, seu merdinha</Text>}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
