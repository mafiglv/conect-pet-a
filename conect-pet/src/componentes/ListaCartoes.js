import React from 'react';
import Cartao from './Cartao';
import './ListaCartoes.css';

function ListaCartoes({ itens }) {
  return (
    <div className="lista-cartoes-container">
      {itens.map((item, index) => (
        <Cartao key={index} item={item} />
      ))}
    </div>
  );
}

export default ListaCartoes;
