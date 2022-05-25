import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ style, children }){
   let estilo = estilos.texto
   if (style?.fontWeight === "bold")
    estilo = estilos.texto_negrito

    return <Text style={[ style, estilo ]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    texto_negrito:{
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})