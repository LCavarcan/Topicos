import React from "react";
import { Text, TouchableHighlight } from "react-native";
import style from "../style";

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.botao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}