import React from 'react';
import './paginaInicial.css';
import NavBar from '../navBar/Navbar';
import Painels from './components/painels/Painel';
import Vitrine from './components/vitrine/Vitrine';
import KieMagia from './components/ki-e-magia/Ki-e-magia';
import Footer from './footer/defaultFooter';

function PaginaInicial() {
  return (
    <div>
      <div className='nav'>
        <NavBar />
      </div>
      <Painels />
      
      {/* <div className='footer'>
        <Footer />
      </div> */}
    </div>
  );
}

export default PaginaInicial;