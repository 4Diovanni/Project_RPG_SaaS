import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navBar/Navbar.js';
import PaginaInicial from './paginaInicial/paginaInicial.js';
// import PaginaCombate from './paginaCombate/paginaCombate.js'

function App() {
  return (
    <Router>
      <div>
        <div className='nav'>
          <NavBar />
        </div>

        {/* Usando <Routes> em vez de <Route> */}
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
