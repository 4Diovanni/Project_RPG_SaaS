import React, { useState } from 'react';
import './Registro.css';

function Registro() {
  // Estados para armazenar os valores dos campos
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode adicionar lógica para processar os dados do formulário
    console.log('Valores do formulário:', { userName, email, password, confirmPassword });
  };

  return (
    <div className='todo-layout'>

      <div className='lado-esquerdo'>
        <div className='layout-esquerdo'>

          <div className='logo'></div>
          <div className='layout-sun-moon-eclipse'>
            <div className='sun'></div>
            <div className='moon'></div>
            <div className='eclipse'></div>
          </div>
        </div>
        <div className='descricao-registro'>
        Este site tem como finalidade registrar um novo player para o banco de dados.
        ©2024 Dio Gears, Inc. Todos direitos reservados. Dio Gears, Crônica De SaaS. 
        </div>
      </div>
      <div className='registrar'>
        <h2>Sing In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Nome de Usuário:</label>
            <input
              type="text"
              id="userName"
              placeholder="Digite o nome de usuário aqui"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite o e-mail aqui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite a senha aqui"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme a senha aqui"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
