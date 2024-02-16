import React from 'react';
import styled, { keyframes } from 'styled-components';
import './Painel.css';
import Logo from './logo2-removebg-preview.png';

// Define a animação de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Cria estilos para o componente
const AnimatedPainel = styled.div`
  &.fadeIn {
    opacity: 0;
    animation: ${fadeIn} 0.8s ease-in-out forwards;
  }
`;

function Painels() {
  return (
    <div className="painels">
      <AnimatedPainel className="painels-layout-1 fadeIn">
        <div className="image-site"><img className='logo-image-painel' src={Logo} alt='Logo Saas' /></div>
        <div className="about-site"><p className='about-site-text'>“durante um longo período, fui inundado por ideias, repleto de criações e manifestações artísticas. E por que não unir isso à programação? Apresento-lhes "As Crônicas de SaaS", o website do meu RPG e portfólio! Desejo transferir toda a minha criatividade e desenvolvimento ao longo do tempo para este site feito com dedicação.
          Espero que apreciem.”</p></div>
      </AnimatedPainel>

      <AnimatedPainel className="painels-layout-2 fadeIn">
        <div className="image-history"></div>
        <div className="rpg-history"><p className='rpg-history-text'>“O mundo de SaaS, por assim dizer, está repleto de fantasias, poderes, criaturas, eventos incríveis e, claro, muitas referências a todo tipo de coisas existentes. É nele que projeto todo o meu desenvolvimento como pessoa, criando desde os personagens, suas emoções, afazeres do dia a dia, objetivos, lemas, e assim por diante. Tudo isso com uma visão ampla de quem eu sou ou de quem você é e pode ser. 
        Aqueles que jogam o RPG "As Crônicas de SaaS" e compreendem o significado de suas ações, sem dúvida, se tornam alguém melhor!”</p></div>
      </AnimatedPainel>
    </div>
  );
}

export default Painels;
