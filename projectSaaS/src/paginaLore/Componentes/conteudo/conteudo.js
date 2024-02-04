import React from "react";
import './conteudo.css';

function Conteudo() {
    return (
        <div className="content-conteudo">

            <div className="content-title-conteudo"><p>Expansão de Dominio: Santuario Malevolente</p></div>

            <div className='layout-conteudo'>
                <div className='content-desc-dice-group'>
                    <div className='content-conteudo-desc'>
                        <p> Kebrada Boyz
                            Pingentão Behelit escarlate
                            Se a lua é vermelha, eu crio o meu reino
                            Vou deixar minha marca bem no seu pescoço
                            E geral vai saber que você é toda minha</p>
                    </div>

                    <div className='layout-content-dice'>
                        <div className='sistem-power-sun'>
                            <h3>Sistema de poder: KI</h3>
                            <p>Energia pulsante em cada ser vivo, irradiando de dentro para fora. Ao fortalecer-se internamente, as pessoas podem potencializar suas capacidades, expandindo suas habilidades e destrezas.</p>
                        </div>
                        <div className='image-dice-sun'></div>
                        <div className='about-sun-sistem'>
                            <h3>O Sol</h3>
                            <p>O Sol desempenha um papel extraordinário neste RPG, sendo a fonte de origem do "KI" e também de seus descendentes, que em um passado distante eram exuberantemente poderosos.</p>
                        </div>

                    </div>
                </div>
                <div className='desc-sun-content'><p>O Sol irradia vitalidade e força...</p></div>
            </div>

        </div>
    );
}

export default Conteudo;
