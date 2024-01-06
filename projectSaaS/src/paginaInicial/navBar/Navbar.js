import React from 'react';
import './Navbar.css'
import Logo from './logo1.png';
function NavBar() {
    return (
        <div className='barra-de-navegação'>
            <div className='logo'>
            <img className='logo-image' src={Logo} alt='Logo Saas' />
            </div>
            <div className='Layout-NavBar'>

                <div className='paginaInicial'>
                    pagina Inicial
                </div>

                <div className='explore'>
                    explore
                </div>

                <div className='mecanicas'>
                    mecanicas
                </div>

                <div className='locais'>
                    locais
                </div>

                <div className='comunidade'>
                    comunidade
                </div>
            </div>
            <div className='login-register'>
                <div className='register'>
                    Register
                </div>
                <div className='login'>
                    Login
                </div>
            </div>
        </div>
    );
};

export default NavBar;
