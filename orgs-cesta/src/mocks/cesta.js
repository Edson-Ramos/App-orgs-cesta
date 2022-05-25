import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta ={
    topo :{
        titulo: "Detalhes da Cesta"
    },
    detalhes :{
        nome : "Cesta de Verduras",
        logo_fazenda: logo,
        nome_fazenda : "Jeny Jack Farm",
        descricao : "Uma cesta com produtos selecionados cuidadosamento da fazenda direto para sua cozinha",
        preco : "R$ 40,00",
        botao : "Comprar",
    },

    itens:{
        titulo: "Itens da Cesta",
        lista:[
            {
                nome: "Tomate",
                imagem : tomate
            },
            {
                nome: "Brocolis",
                imagem : brocolis
            },
            {
                nome: "Batata",
                imagem : batata
            },
            {
                nome: "Pepino",
                imagem : pepino
            },
            {
                nome: "Abobora",
                imagem : abobora
            },
        ]
    }
}

export default cesta;