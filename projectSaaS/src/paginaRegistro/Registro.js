import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase.js';
import './Registro.css';
import GoogleIcon from '../google.png';
import FacebookIcon from '../facebook.png';
import LadoEsquerdo from './ladoEsquerdo/ladoEsquerdo.js';

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

    try {
      // Crie um novo usuário usando Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Se chegou aqui, significa que o usuário foi criado com sucesso
      console.log('Usuário registrado com sucesso:', userCredential.user);
      // Redirecione o usuário para a página inicial
      navigate('/');
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error.message);
      alert('Erro ao registrar o usuário:', error.message);
    }
  }

  return (
    <div className='todo-layout'>
      <LadoEsquerdo/>

      <div className='registrar'>
        <h1 className='texto-titulo-registro'>
          Sing In
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
            <div><p className='paragrafo-rede-sociais'>você pode se conectar também com</p></div>
            <div className='rede-sociais-layout'>
              <div className='google-button'><img className='google-image' src={GoogleIcon} alt='Google Icon' /></div>
              <div className='facebook-button'><img className='facebook-image' src={FacebookIcon} alt='Facebook Icon' /></div>
            </div>
            <div className='linha'></div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Componente separado para campos do formulário
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
