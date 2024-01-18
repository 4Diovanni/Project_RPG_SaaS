import React from "react";
import Titulo from './title/titulo'
import LadoEsquerdo from './leftSide/baseEsquerda'
import LadoDireito from './rightSide/baseDireita'
import Footer from "../paginaInicial/footer/defaultFooter";


function PaginaCombate() {
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
                <Footer />
            </div>
        </div> 
    );
}
export default PaginaCombate;