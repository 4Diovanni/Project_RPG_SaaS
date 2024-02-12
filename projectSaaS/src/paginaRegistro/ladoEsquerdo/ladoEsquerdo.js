import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ladoEsquerdo.css';
import Logo from './Logo2.png';

function ladoEsquerdo() {
    return (
        <div className='lado-esquerdo'>
            <div className='logo-e-eclipse'>
                <div className='logoRegistro'>
                    <Link to='/'><img className='logo-image' src={Logo} alt='Logo Saas' /> </Link>
                </div>

                <div className='loader'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
            <div className='descricao-registro'>
                <div className='texto-descricao-ladoEsquerdo'>
                    <div className='texto-descricao-ladoEsquerdo'>Este site tem como finalidade registrar um novo player para o banco de dados.</div>
                </div>
                <div className='texto-descricao-ladoEsquerdo'>
                    <div className='texto-descricao-ladoEsquerdo'>©2024 Dio Gears, Inc. Todos direitos reservados. Dio Gears, Crônica De SaaS.</div>
                </div>
            </div>
        </div>
    );
}

export default ladoEsquerdo;