import React from 'react';
import './Voluntarios.css';
import dogImage from '../assets/dog.png'; //
import volunteerImage from '../assets/volunteer.png'; // 

function Voluntarios() {
  return (
    <section className="voluntarios">
      <div className="cabecalho-voluntarios">
        <img src={dogImage} alt="Cachorro" className="imagem-dog" />
        <div className="texto-voluntarios">
          <h2>SEJA UM VOLUNTÁRIO</h2>
          <p>Uma solução tecnológica para conectar vidas e transformar o futuro dos animais de rua.</p>
        </div>
      </div>

      <div className="conteudo-voluntarios">
        <div className="imagem-container">
          <img src={volunteerImage} alt="Voluntário" className="imagem-voluntario" />
        </div>
        <div className="descricao-voluntarios">
          <p>Quer ajudar a transformar a vida dos animais de rua? Descubra a ONG que mais combina com você, participe de suas ações e faça a diferença sendo um voluntário.</p>
          <p>Juntos, podemos oferecer uma nova chance para quem mais precisa.</p>
        </div>
      </div>

      <button className="btn-seja-voluntario">SEJA VOLUNTÁRIO</button>
    </section>
  );
}

export default Voluntarios;
