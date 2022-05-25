import React from 'react';
import {Image, StyleSheet, Dimensions, Text, View} from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image style={estilos.topo} source={topo} />
    <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>

    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.img_fazenda} source={logo}></Image>
        <Texto style={estilos.nome_fazenda}>Jeny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamento da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </View>
    </> 
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color:"#464646",
        fontWeight: "bold"
        
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    img_fazenda:{
        width:32,
        height: 32
    },
    nome_fazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 43,
        marginTop: 8,
    },  
});