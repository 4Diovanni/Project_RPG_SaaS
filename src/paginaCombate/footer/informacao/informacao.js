import React from "react";
import './informacao.css';
import Direitos from "./direitosAutorais/direitos";

function InformacaoRpg() {
    return (
        <div className="letra-centralizar">
            <p className="letra-color">Site criado para portfólio e contribuição ao meu RPG.</p>
            <Direitos />
        </div>
    );
}

export default InformacaoRpg;
