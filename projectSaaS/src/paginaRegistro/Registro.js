import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sun from '../sun.png';
import Moon from '../moon.png';
import Eclipse from '../eclipse.png';
import Logo from '../Logo2.png';
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
            {/* ... imagens do sol, lua e eclipse ... */}
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
        <h2 className='texto-titulo-registro'>
          Sing In
          <div className='linha'></div>
        </h2>
        <form onSubmit={handleSubmit} className='layout-forms'>
          <FormField label='Nome de Usuário:' type='user' placeholder='User Name' value={userName} onChange={setUserName} />
          <FormField label='E-mail:' type='email' placeholder='E-mail' value={email} onChange={setEmail} />
          <FormField label='Senha:' type='password' placeholder='Password' value={password} onChange={setPassword} />
          <FormField label='Confirmar Senha:' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={setConfirmPassword} />
          <div className='linha'></div>
          <button type='submit' className='botao'>Registrar</button>
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
