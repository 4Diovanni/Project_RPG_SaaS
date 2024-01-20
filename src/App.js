import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicial from './paginaInicial/paginaInicial.js';
import PaginaCombate from './paginaCombate/paginaCombate.js';
import Registrar from './paginaRegistro/Registro.js'
// import PaginaCombate from './paginaCombate/paginaCombate.js'

function App() {
  return (
    <Router>
      <div>
        

        {/* Usando <Routes> em vez de <Route> */}
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='/paginaCombate' element={<PaginaCombate />} />
          <Route path='/registro' element={<Registrar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
