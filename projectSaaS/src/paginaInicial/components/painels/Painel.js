import React from 'react';
import styled, { keyframes } from 'styled-components';
import './Painel.css';

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
        <div className="image-site"></div>
        <div className="about-site"></div>
      </AnimatedPainel>

      <AnimatedPainel className="painels-layout-2 fadeIn">
        <div className="image-history"></div>
        <div className="rpg-history"></div>
      </AnimatedPainel>
    </div>
  );
}

export default Painels;
