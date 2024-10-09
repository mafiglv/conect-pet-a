import React from 'react';
import Cabecalho from '../componentes/Cabecalho';
import ListaCartoes from '../componentes/ListaCartoes';

function AdoteComAmor() {
  const pets = [
    { nome: 'Gary', genero: 'Macho', idade: '1 ano', imagem: '/gary.png' },
    { nome: 'Moon', genero: 'Fêmea', idade: '1 ano', imagem: '/moon.png' },
    // Adicionar mais pets aqui...
  ];

  return (
    <div className="adote-com-amor-container">
      <Cabecalho
        titulo="Adote com Amor"
        subtitulo="Esses são alguns PETS que estão para adoção em algumas ONGs parceiras."
        imagem="/dog-adoption-header.png"
      />
      <ListaCartoes itens={pets} />
    </div>
  );
}

export default AdoteComAmor;
