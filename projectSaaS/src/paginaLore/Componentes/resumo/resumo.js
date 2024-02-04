import React from "react";
import './resumo.css';
import Sun from './sun300x300.png';
import Moon from './moon300x300.png';

function Resumo() {
    return (
        <div className="content-resumo">
            <div className="content-title-resumo"><p>SUN: “O corpo”</p></div>

            <div className="layout-content-resumo">
                <div className="content-text">
                    <p> O sol no mundo de Saas representa o corpo que assim como a lua é de extrema importancia, possui aqueles que tem uma vontade avassaladora.<br/>
                    A origem do sol ninguem sabe, provavel se deu criação a partir de alguem ou de um povo cheio de vontade e esperança.<br/>
                    Os primeiros a usarem os poderes do sol foram chamados de Solari’s.
                </p>
                </div>
                <div className="imagem-sun-moon">
                <img className="img-rotate" src={Sun} alt="sun"></img>
                </div>
            </div>
        </div>
    );
}

export default Resumo;