import React from "react";
import './paginaPerfil.css';
import Footer from '../footer/defaultFooter';
import ContentPerfil from './infoPerfil/infoPerfil'

function PaginaPerfil() {
    return (
        //esse layout estará em cascata
        <div className="all-layout">
            {/* crir um retangulo para a area */}
            <div className="content-perfil">
                <ContentPerfil />
            </div>

            <div className="content-fichas"></div>
            <Footer />
        </div>
    );
}

export default PaginaPerfil;