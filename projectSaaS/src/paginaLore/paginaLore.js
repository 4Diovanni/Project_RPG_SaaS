import React from "react";
import './paginaLore.css';
import NavBar from '../navBar/Navbar';
import Footer from '../footer/defaultFooter';
import Painel from './Componentes/painel/painel.js';
import Conteudo from './Componentes/conteudo/conteudo.js';
import Resumo from './Componentes/resumo/resumo.js';

function PaginaLore() {
    return (
        <div>
            <div className='nav'>
                <NavBar />
            </div>

            <Painel />
            <Conteudo />
            <Resumo/>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default PaginaLore;