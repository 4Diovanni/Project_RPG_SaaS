import React, { useEffect, useState } from 'react';
import Firebase from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UsuarioFoto from '../user.png';

const { auth, database } = Firebase;

function NavBar() {
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [userName, setUserName] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // Adicionado

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUserLoggedIn(true);
                // Pegar a URL da imagem de perfil
                const profileImageRef = ref(database, 'users/' + user.uid + '/profileImageUrl');
                onValue(profileImageRef, (snapshot) => {
                    const imageUrl = snapshot.val();
                    if (imageUrl) setProfileImageUrl(imageUrl);
                });
                // Pegar o nome de usuário
                const userNameRef = ref(database, 'users/' + user.uid + '/userName');
                onValue(userNameRef, (snapshot) => {
                    const name = snapshot.val();
                    if (name) setUserName(name);
                });
            } else {
                setIsUserLoggedIn(false);
                setProfileImageUrl('');
                setUserName('');
            }
        });
    }, []);

    const handleHover = (dropdownId) => {
        setActiveDropdown(dropdownId);
    };

    const handleLeave = () => {
        setActiveDropdown(null);
    };

    // Componente DropdownMenu para evitar repetição de código
    const DropdownMenu = ({ id, children }) => (
        <div
            className="dropdown"
            onMouseEnter={() => handleHover(id)}
            onMouseLeave={handleLeave}
            style={{ display: activeDropdown === id ? "block" : "none" }}
        >
            <ul>{children}</ul>
        </div>
    );

    return (
        <div className='barra-de-navegacao'>

            <div className='Layout-NavBar'>

                <div className='explore' onMouseEnter={() => handleHover('explore')} onMouseLeave={handleLeave}>
                    Explore
                    <DropdownMenu id="explore">
                        <li><Link to='/ficha'>Ficha</Link></li>
                        <li><Link to='/paginaLore'>Lore</Link></li>
                        <li><Link to='/paginaCombate'>Combate</Link></li>
                        <li><Link to='/'>PatchNotes</Link></li>
                    </DropdownMenu>
                </div>

                <div className='mecanicas' onMouseEnter={() => handleHover('mecanicas')} onMouseLeave={handleLeave}>
                    Mecânicas
                    <DropdownMenu id="mecanicas">
                        <li><Link to='/'>Poderes</Link></li>
                        <li><Link to='/'>Armas</Link></li>
                        <li><Link to='/'>Reliquias</Link></li>
                        <li><Link to='/'>Eventos</Link></li>
                    </DropdownMenu>
                </div>

                <div className='locais' onMouseEnter={() => handleHover('locais')} onMouseLeave={handleLeave}>
                    Locais
                    <DropdownMenu id="locais">
                        <li><Link to='/'>Paises</Link></li>
                        <li><Link to='/'>Continentes</Link></li>
                        <li><Link to='/'>Biomas</Link></li>
                        <li><Link to='/'>Mapa Mundi</Link></li>
                    </DropdownMenu>
                </div>

                <div className='comunidade' onMouseEnter={() => handleHover('comunidade')} onMouseLeave={handleLeave}>
                    Comunidade
                    <DropdownMenu id="comunidade">
                        <li><Link to='/'>Players</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                        <li><Link to='/'>Guia</Link></li>
                        <li><Link to='/'>Mestre&Jogador</Link></li>
                        <li><Link to='/'>Discord</Link></li>
                    </DropdownMenu>
                </div>
            </div>

            <div className='login-profile'>
                {isUserLoggedIn ? (
                    <>
                        <div className='login'>
                            <Link to='/perfil'>
                                <img className='perfil-Img' src={profileImageUrl || UsuarioFoto} alt='user-foto' />
                            </Link>
                        </div>
                        <div>
                            Bem-vindo: <br/>{userName}
                        </div>
                    </>
                ) : (
                    <div>
                        <Link className='criar-conta' to='/registro'>Crie</Link> ou <Link className='logar-conta' to='/login'>faça login</Link>
                    </div>
                )}
            </div>

        </div>
    );
}

export default NavBar;
