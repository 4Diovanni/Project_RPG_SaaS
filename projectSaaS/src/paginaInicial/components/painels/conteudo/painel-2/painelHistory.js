import React from 'react';
import './painelHistory.css'; // Arquivo CSS para estilização
import BackgroundImage from './background.jpg'; // Adicione o caminho correto para a imagem de fundo
import ExampleImage1 from './pullovers.jpg'; // Adicione o caminho correto para as imagens
import ExampleImage2 from './Swing Lynn.jpg';

function PainelHistory() {
  return (
    <div className="painelHistory" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="content">
        <p className="base-text">Descubra o mundo de SaaS: uma aventura épica repleta de criaturas mágicas, poderes extraordinários e eventos emocionantes. Neste universo fascinante, cada personagem, emoção e desafio é uma extensão da jornada pessoal do criador, refletindo a essência de ser e se tornar. "As Crônicas de SaaS" não é apenas um RPG; é uma jornada de autoconhecimento e transformação. Mergulhe nesse mundo e encontre a melhor versão de si mesmo!</p>
        <div className="images">
          <img src={ExampleImage1} alt="Descrição da Imagem 1" />
          <img src={ExampleImage2} alt="Descrição da Imagem 2" />
        </div>
      </div>
    </div>
  );
}

export default PainelHistory;
