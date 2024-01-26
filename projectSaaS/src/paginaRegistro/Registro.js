import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sun from '../sun.png';
import Moon from '../moon.png';
import Eclipse from '../eclipse.png';
import Logo from '../Logo2.png';
import Google from '../google.png';
import Facebook from '../facebook.png';
import './Registro.css';


const Registro = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Valores do formulário:', { userName, email, password, confirmPassword });
  };

  

  return (
    <div className='todo-layout'>
      <div className='lado-esquerdo'>
        <div className='logo-e-eclipse'>
          <div className='logoRegistro'>
            <Link to='/'><img className='logo-image' src={Logo} alt='Logo Saas' /> </Link>
          </div>

          <div className='layout-sun-moon-eclipse'>
            <div className='sun'>
              <img className='sun-image' src={Sun} alt='Sun Saas' />
            </div>
            <div className='eclipse'>
              <img className='eclipse-image' src={Eclipse} alt='Eclipse Saas' />
            </div>

            <div className='moon'>
              <img className='moon-image' src={Moon} alt='Moon Saas' />
            </div>
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

      <div className='registrar'>
        <h1 className='texto-titulo-registro'>
          Sing In
          <div className='linha'></div>
        </h1>
        <form onSubmit={handleSubmit} className='layout-forms'>
          <FormField label='' type='user' placeholder='User Name' value={userName} onChange={setUserName} />
          <FormField label='' type='email' placeholder='E-mail' value={email} onChange={setEmail} />
          <FormField label='' type='password' placeholder='Password' value={password} onChange={setPassword} />
          <FormField label='' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={setConfirmPassword} />
          <div className='layout-botao'>
            <button type='submit' className='botao'>Registrar</button>
            <div className='link-botao-esquecer'><Link to='/'><p className='paragrafo-botao-esquecer'> Esqueceu a senha?</p></Link></div>

          </div>
          <div className='rede-sociais'>
            <div><p className='paragrafo-rede-sociais'>você pode se conectar também com</p></div>
            <div className='rede-sociais-layout'>
              <div className='google-button'><img className='google-image' src={Google} alt='Google Icon' /></div>
              <div className='facebook-button'><img className='facebook-image' src={Facebook} alt='Facebook Icon' /></div>
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


