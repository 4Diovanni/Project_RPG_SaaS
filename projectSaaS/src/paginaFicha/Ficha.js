import React from "react";
import './Ficha.css';
import NavBar from '../navBar/Navbar';
import Footer from '../footer/defaultFooter';
import ContentIMG from './conteudo/contentImg/ImagemFicha';
import ContentAtribute from './conteudo/contentAtribute/AtributeFicha';
import ContentItens from './conteudo/contentItens/ItensFicha';

function Ficha() {
    return (
        <div className="all-layout-ficha">
            <NavBar />

            <div className="parte1">
                <ContentIMG />
            </div>
            <div className="parte2">
                <ContentAtribute />
            </div>
            <div className="parte3">
                <ContentItens />
            </div>


            <Footer />
        </div>
    );
}

export default Ficha;