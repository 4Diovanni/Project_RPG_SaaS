import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Firebase from '../firebase.js';
import './Registro.css';
import GoogleIcon from '../google.png';
import FacebookIcon from '../facebook.png';
import LadoEsquerdo from './ladoEsquerdo/ladoEsquerdo.js';
import Retornar from './left.png';
import Footer from '../footer/defaultFooter.js';
import { ref, set } from 'firebase/database';

const { auth, database, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } = Firebase;

const Registro = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Usuário registrado e autenticado
                const userData = {
                    userName: userName,
                    email: email,
                };
                set(ref(database, 'users/' + userCredential.user.uid), userData);
                console.log('Usuário registrado com data:', userData);
                const userId = userCredential.user.uid; // O UID (userId) do usuário
                console.log("Usuário criado com sucesso com ID:", userId);
                navigate('/'); // Redireciona o usuário para a página inicial ou dashboard após o registro
            })
            .catch((error) => {
                console.error('Erro ao registrar o usuário:', error.message);
                alert('Erro ao registrar o usuário: ' + error.message);
            });

    }

    const handleGoogleRegister = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            // Isso dá-lhe um token de acesso do Google. Você pode usá-lo para acessar a API do Google.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // As informações do usuário logado
            const user = result.user;
            
            // Aqui você pode extrair as informações do usuário do objeto user e salvá-las no Firebase Database
            const userData = {
                userName: user.displayName, // O nome do usuário do Google
                email: user.email, // O email do usuário do Google
                profileImageUrl: user.photoURL // A URL da foto do perfil do usuário do Google
            };
            await set(ref(database, 'users/' + user.uid), userData);
            console.log('Usuário registrado com Google e dados salvos:', userData);
    
            //navigate('/'); // Redireciona o usuário para a página inicial ou dashboard após o registro
        } catch (error) {
            console.error('Erro ao registrar com o Google:', error.message);
            alert('Erro ao registrar com o Google:', error.message);
        }
    }

    const handleFacebookRegister = async () => {
        try {
            const provider = new FacebookAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/');
        } catch (error) {
            console.error('Erro ao registrar com o Facebook:', error.message);
            alert('Erro ao registrar com o Facebook:', error.message);
        }
    }

    return (
        <div className='todo-layout-registrar'>
            <div className='content-left-register'>
                <LadoEsquerdo />

                <div className='registrar'>
                    <div className='button-back-registrar'>
                        <Link to='/'><img src={Retornar} alt="Voltar" /></Link>
                    </div>
                    <h1 className='texto-titulo-registro'>
                        Registro
                        <div className='linha'></div>
                    </h1>
                    <form onSubmit={handleSubmit} className='layout-forms'>
                        <FormField label='User Name' type='user' placeholder='User Name' value={userName} onChange={setUserName} />
                        <FormField label='E-mail' type='email' placeholder='E-mail' value={email} onChange={setEmail} />
                        <FormField label='Password' type='password' placeholder='Password' value={password} onChange={setPassword} />
                        <FormField label='Confirm Password' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={setConfirmPassword} />
                        <div className='layout-botao'>
                            <button type='submit' className='botao'>Registrar</button>
                            <div className='link-botao-esquecer'><Link to='/'><p className='paragrafo-botao-esquecer'> Esqueceu a senha?</p></Link></div>
                        </div>
                        <div className='rede-sociais'>

                            <div className='rede-sociais-layout'>
                                <div className='google-button' onClick={handleGoogleRegister}><img className='google-image' src={GoogleIcon} alt='Google Icon' /></div>
                                <div className='facebook-button' onClick={handleFacebookRegister}><img className='facebook-image' src={FacebookIcon} alt='Facebook Icon' /></div>
                            </div>
                            <div className='linha'></div>
                        </div>
                    </form>
                    <p className='login-link'>Se você já tem uma conta, <Link to='/login'>faça login aqui</Link>.</p>
                </div>
            </div>
            <Footer />
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

export default Registro;
