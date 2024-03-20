import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    botao: {
        fontSize: 20,
        height: Dimensions.get('window').height/16,
        width: Dimensions.get('window').width/2,
        padding: 10,
        backgroundColor: 'cyan',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
})