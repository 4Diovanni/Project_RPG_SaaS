import React from "react";
import Titulo from './title/titulo'
import NavBar from '../navBar/Navbar';
import LadoEsquerdo from './leftSide/baseEsquerda'
import LadoDireito from './rightSide/baseDireita'
import Footer from "../paginaInicial/footer/defaultFooter";


function PaginaCombate() {
    return (
        <div>
            <div className='nav'>
                <NavBar />
            </div>

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
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default PaginaCombate;