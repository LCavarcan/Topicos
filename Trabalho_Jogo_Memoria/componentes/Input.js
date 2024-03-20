import React, { useState } from "react";
import { TextInput } from "react-native";

export default Input => {
    const [text, setText] = useState('')

    const handleBlur = () => {
        alert(text)
    }
    
    return (        
        <TextInput
            placeholder="Digite o valor da sequência"
            onChangeText={text => setText(text)}
            onBlur={handleBlur}
        />

        
    )
}