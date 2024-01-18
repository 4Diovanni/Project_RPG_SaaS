import React from 'react';
import './paginaInicial.css';
import Painels from './components/painels/Painel';
import Vitrine from './components/vitrine/Vitrine';
import KieMagia from './components/ki-e-magia/Ki-e-magia';
import Footer from './footer/defaultFooter';
function PaginaInicial() {
  return (
    <div>
      
      <Painels />
      <Vitrine />
      <KieMagia />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default PaginaInicial;