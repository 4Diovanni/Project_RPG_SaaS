import React from "react";
import ContentLeft from './ladoEsquerdoPerfil/leftSide.js';
import ContentRight from './ladoDireitoPerfil/rigthSide.js';
import './infoPerfil.css';

function InfoPerfil() {
    return (
        <div className="layout-info">

            <ContentLeft />
            <ContentRight />
        </div>
    );
}

export default InfoPerfil;