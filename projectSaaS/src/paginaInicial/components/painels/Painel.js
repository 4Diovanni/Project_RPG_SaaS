import React from 'react';
import './Painel.css'; // Se necessário, mantenha para regras globais ou reset CSS.
import PainelSite from './conteudo/painel-1/painelSite';
import PainelHistory from './conteudo/painel-2/painelHistory';

function Painels() {
  return (
    <div>
      <PainelSite/>
      <PainelHistory/>
    </div>
  );
}

export default Painels;
