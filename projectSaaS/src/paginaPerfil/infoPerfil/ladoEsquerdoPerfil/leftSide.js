import React from "react";
import './leftSide.css';
import Voltar from './left.png';
import Engine from './engrenagem.png';

function LeftSide() {
    return (
        <div className="layout-leftSide">
            <div className="layout-leftEngine">
                <div className="img-left"><img src={Voltar} alt="voltar para a página inicial" /></div>
                <div className="img-engine"><img src={Engine} alt="ir para a página de configuração de conta" /></div>
            </div>

            <div className="layout-imgPerfil">
                <div className="imgPerfil">
                    <img src="gato.png" alt="imagem de perfil" />
                </div>
                <div className="layout-btn-changeChooseImg">
                    <div className="btn-chooseImg">Escolher nova imagem</div>
                    <div className="btn-changeImg">Alterar imagem</div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
