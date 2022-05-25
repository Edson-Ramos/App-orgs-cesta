import React, { Children } from "react";
import{ Alert, StyleSheet, TouchableOpacity} from 'react-native'

import Texto from './Texto';

export default function Botao ({children}){
    return<>
        <TouchableOpacity style={estilos.botao} onPress={()=> Alert.alert("Apertou!!")}>
            <Texto style={estilos.texto_botao}>{ children }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        marginHorizontal: 60,
        borderRadius: 6,

    },
    texto_botao:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
})