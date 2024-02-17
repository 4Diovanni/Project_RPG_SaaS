import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UsuarioFoto from '../user.png'

function NavBar() {
    // Estado para controlar a exibição do dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    // Função para lidar com o hover
    const handleHover = () => {
        setShowDropdown(true);
    };

    // Função para lidar com a saída do hover
    const handleLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div className='barra-de-navegacao'>
            
            <div className='Layout-NavBar'>
                {/* Adiciona eventos de hover às guias */}
                <div className='paginaInicial'>
                    
                    <Link to='/configuracaoConta'>Página Inicial</Link>
                </div>

                <div className='explore' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    Explore
                    {/* Mostra o dropdown se showDropdown for true */}
                    {showDropdown && (
                        <div className='dropdown'>
                            <ul>
                                <li><Link to='/'>Ficha</Link></li>
                                <li><Link to='/paginaLore'>Lore</Link></li>
                                <li><Link to='/paginaCombate'>Combate</Link></li>
                                <li><Link to='/'>PatchNotes</Link></li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Adiciona eventos de hover às guias */}
                <div className='mecanicas' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    Mecânicas
                    {showDropdown && (
                        <div className='dropdown'>
                            <ul>
                                <li><Link to='/'>Poderes</Link></li>
                                <li><Link to='/'>Armas</Link></li>
                                <li><Link to='/'>Reliquias</Link></li>
                                <li><Link to='/'>Eventos</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Adiciona eventos de hover às guias */}
                <div className='locais' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    Locais
                    {showDropdown && (
                        <div className='dropdown'>
                            <ul>
                                <li><Link to='/'>Paises</Link></li>
                                <li><Link to='/'>Continentes</Link></li>
                                <li><Link to='/'>Biomas</Link></li>
                                <li><Link to='/'>Mapa Mundi</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Adiciona eventos de hover às guias */}
                <div className='comunidade' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    Comunidade
                    {showDropdown && (
                        <div className='dropdown'>
                            <ul>
                                <li><Link to='/'>Players</Link></li>
                                <li><Link to='/'>FAQ</Link></li>
                                <li><Link to='/'>Guia</Link></li>
                                <li><Link to='/'>Mestre&Jogador</Link></li>
                                <li><Link to='/'>Discord</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='login-register'>
                <div className='login'>
                    <Link to='/login '><img src={UsuarioFoto} alt='user-foto'></img></Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
