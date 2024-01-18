import React, { useState } from 'react';
import './Navbar.css';
import Logo from './logo1.png';

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
            <div className='logo'>
                <img className='logo-image' src={Logo} alt='Logo Saas' />
            </div>
            <div className='Layout-NavBar'>
                {/* Adiciona eventos de hover às guias */}
                <div className='paginaInicial'>
                    Página Inicial
                </div>

                <div className='explore' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    Explore
                    {/* Mostra o dropdown se showDropdown for true */}
                    {showDropdown && (
                        <div className='dropdown'>
                            <ul>
                                <li>Ficha</li>
                                <li>Lore</li>
                                <li>Combate</li>
                                <li>PatchNotes</li>
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
                                <li>Poderes</li>
                                <li>Armas</li>
                                <li>Reliquias</li>
                                <li>Eventos</li>
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
                                <li>Paises</li>
                                <li>Continentes</li>
                                <li>Biomas</li>
                                <li>Mapa Mundi</li>
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
                                <li>Players</li>
                                <li>FAQ</li>
                                <li>Guia</li>
                                <li>Mestre&Jogador</li>
                                <li>Discord</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='login-register'>
                <div className='register'>
                    Registrar
                </div>
                <div className='login'>
                    Login
                </div>
            </div>
        </div>
    );
}

export default NavBar;
