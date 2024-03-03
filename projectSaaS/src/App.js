import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PaginaInicial from './paginaInicial/paginaInicial.js';
import PaginaCombate from './paginaCombate/paginaCombate.js';
import Registrar from './paginaRegistro/Registro.js';
import Login from './paginaLogin/login.js'
import PaginaLore from './paginaLore/paginaLore.js';
import PaginaPerfil from './paginaPerfil/paginaPerfil.js';
import ConfigPerfil from './paginaPerfil/configAccount/config.js';
import PaginaFicha from './paginaFicha/Ficha.js';



function App() {
  return (
    <Router>
      <div>
        

        {/* Usando <Routes> em vez de <Route> */}
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='/paginaCombate' element={<PaginaCombate />} />
          <Route path='/paginaLore' element={<PaginaLore />} />
          <Route path='/registro' element={<Registrar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<PaginaPerfil />} />
          <Route path='/configPerfil' element={<ConfigPerfil />} />
          <Route path='/ficha' element={<PaginaFicha />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
