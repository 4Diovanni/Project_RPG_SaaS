// App.js
import React from 'react';
import './App.css';
import LadoEsquerdo from './leftSide/baseEsquerda';
import LadoDireito from './rightSide/baseDireita';
import Titulo from './title/titulo';
import Footer from './footer/defaultFooter';

function App() {
  return (
    <div className='fundo-layout'>
      <div className='titulo-centralizar'>
        <Titulo />
      </div>

      <div className='layout-ambos'>
        <div className='layout-esquerdo'>
          <LadoEsquerdo />
        </div>
        <div className='layout-direito'>
          <LadoDireito />
        </div>
      </div>

      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
