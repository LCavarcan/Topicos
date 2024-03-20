import React from "react";
import { Text } from "react-native";

export default Sequencia => {
    let min = Math.ceil(Sequencia.min)
    let max = Math.floor(Sequencia.max)
    valor = Math.floor(Math.random() * (Sequencia.max-Sequencia.min) + Sequencia.min)

    Sequencia.onValorGerado(valor)
    
    return (
        <Text>{valor}</Text>
    )
}