import React from 'react';
import './Cartao.css';

function Cartao({ item }) {
  return (
    <div className="cartao">
      <img src={item.imagem} alt={item.nome} className="cartao-imagem" />
      <div className="cartao-informacoes">
        <h3>{item.nome}</h3>
        <p>{item.genero}</p>
        <p>{item.idade}</p>
      </div>
    </div>
  );
}

export default Cartao;