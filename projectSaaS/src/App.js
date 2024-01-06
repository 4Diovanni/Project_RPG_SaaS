import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './paginaInicial/navBar/Navbar';
import Painels from './paginaInicial/components/painels/Painel';
import Vitrine from './paginaInicial/components/vitrine/Vitrine';
import KieMagia from './paginaInicial/components/ki-e-magia/Ki-e-magia';
import Footer from './paginaInicial/footer/defaultFooter';
function App() {
  return (
    <div>
      <Router>
        <div className='nav'>
          <NavBar />
        </div>
      </Router>
      <Painels />
      <Vitrine />
      <KieMagia />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
