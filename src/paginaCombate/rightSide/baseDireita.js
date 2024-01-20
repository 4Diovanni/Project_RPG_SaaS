// rightSide/baseDireita.js
import React from 'react';
import './baseDireita.css';

function BaseDireita() {
    return (
        <div className="tudo">
            <div className="inimigo">
                <div className="layout-inimigo">
                    <div className="info">
                        <div className="atributos"></div>
                        <div className="resultados-status"></div>
                        <div className="vida"></div>
                    </div>
                    <div className="resultados">
                        <div className="dano"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BaseDireita;