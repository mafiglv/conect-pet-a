import React from 'react';
import './NosConheca.css';
import dogImage from '../assets/dog.png'; // Suponha que a imagem do cachorro esteja na pasta assets
import catImage from '../assets/cat.png'; // Suponha que a imagem do gato esteja na pasta assets

function NosConheca() {
  return (
    <section className="nos-conheca">
      <div className="cabecalho-nos-conheca">
        <img src={dogImage} alt="Cachorro" className="imagem-dog" />
        <div className="texto-nos-conheca">
          <h2>NOS CONHEÇA</h2>
          <p>Uma solução tecnológica para conectar vidas e transformar o futuro dos animais de rua.</p>
        </div>
      </div>

      <div className="conteudo-nos-conheca">
        <div className="imagem-container">
          <img src={catImage} alt="Gato" className="imagem-cat" />
        </div>
        <div className="descricao-nos-conheca">
          <p>O ConectPet surgiu para transformar a vida dos animais de rua e unir pessoas que acreditam que todos merecem um lar cheio de carinho.</p>
          <p>Nossa plataforma conecta ONGs, voluntários e adotantes em um só lugar. Você pode adotar, fazer doações para instituições e se voluntariar para ajudar na causa. Facilitamos todo o processo de adoção de forma segura e prática.</p>
        </div>
      </div>
    </section>
  );
}

export default NosConheca;
