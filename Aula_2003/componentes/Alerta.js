import React from "react";
import { View, Button, Alert } from "react-native";

export default Alerta = () => {
    const showAlert = () => {
        Alert.alert(
            'Titulo do alerta',
            'Este é um exemplo de mensagem de alerta',
            [
                {text: 'OK', onPress: () => console.warn('Ok foi pressionado')},
                {text: 'Cancelar', onPress: () => console.warn('Cancelar foi pressionado')}
            ]
        )
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Mostrar Alerta" onPress={showAlert}/>
        </View>
    )
}