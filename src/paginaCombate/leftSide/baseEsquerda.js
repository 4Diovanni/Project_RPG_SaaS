// leftSide/baseEsquerda.js
import React from 'react';
import './baseEsquerda.css';

function BaseEsquerda() {
  return (
    <div className="tudo">
      <div className="player">
        <div className="layout-player">
          <div className="info">
            <div className="identificacao"></div>
            <div className="informacao-usuario"></div>
            <div className="vida"></div>
          </div>
          <div className="resultados">
            <div className="dano"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseEsquerda;
