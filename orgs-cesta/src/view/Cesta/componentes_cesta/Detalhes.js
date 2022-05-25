import React from 'react';
import{ View, Image, StyleSheet} from 'react-native'


import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botão';

export default function Detalhes ({ logo_fazenda, nome, nome_fazenda, descricao, preco, botao}){
    return<>
        
            <Texto style={estilos.nome}>{ nome }</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.img_fazenda} source={ logo_fazenda }></Image>
                <Texto style={estilos.nome_fazenda}>{ nome_fazenda }</Texto>
            </View>
            <Texto style={estilos.descricao}>{ descricao }</Texto>
            <Texto style={estilos.preco}>{ preco }</Texto>
            <Botao>{ botao }</Botao>
       
        </>
}
    
    
const estilos = StyleSheet.create({
   
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