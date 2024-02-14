import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from '../firebase.js'; // Adicionando os provedores de login do Firebase
import './login.css'; // Renomeei o arquivo CSS para Login.css
import GoogleIcon from '../google.png';
import FacebookIcon from '../facebook.png';
import LadoDireito from './ladoDireito/ladoDireito.js';
import Retornar from './left.png';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuário fez login com sucesso:', email);
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            alert('Erro ao fazer login:', error.message);
        }
    }

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Usuário fez login com sucesso usando Google:', result.user);
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer login com Google:', error.message);
            alert('Erro ao fazer login com Google:', error.message);
        }
    }

    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Usuário fez login com sucesso usando Facebook:', result.user);
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer login com Facebook:', error.message);
            alert('Erro ao fazer login com Facebook:', error.message);
        }
    }

    return (
        <div className='todo-layout-logar'>
            
            <div className='logar'>
                <div className='button-back-login'>
                    <Link to='/'><img src={Retornar} alt="Voltar" /></Link>
                </div>
                <h1 className='texto-titulo-logar'>Login<div className='linha'></div></h1>
                <form onSubmit={handleSubmit} className='layout-forms'>
                    <FormField label='E-mail' type='email' placeholder='E-mail' value={email} onChange={setEmail} />
                    <FormField label='Password' type='password' placeholder='Password' value={password} onChange={setPassword} />
                    <div className='layout-botao'>
                        <button type='submit' className='botao'>Login</button>
                        <div className='link-botao-esquecer'><Link to='/'><p className='paragrafo-botao-esquecer'> Esqueceu a senha?</p></Link></div>
                    </div>
                    <div className='rede-sociais'>
                        <div><p className='paragrafo-rede-sociais'>Você também pode se conectar com:</p></div>
                        <div className='rede-sociais-layout'>
                            <div className='google-button' onClick={handleGoogleLogin}>
                                <img className='google-image' src={GoogleIcon} alt='Google Icon' /></div>
                            <div className='facebook-button' onClick={handleFacebookLogin}>
                                <img className='facebook-image' src={FacebookIcon} alt='Facebook Icon' /></div>
                        </div>
                        <div className='linha'></div>
                    </div>
                </form>
            </div>
            
            <LadoDireito />
        </div>
    );
};

const FormField = ({ label, type, placeholder, value, onChange }) => (
    <div className={`${type.toLowerCase()}`}>
        <label htmlFor={label}>{label}</label>
        <input
            type={type}
            id={label}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
        />
    </div>
);

export default Login;
