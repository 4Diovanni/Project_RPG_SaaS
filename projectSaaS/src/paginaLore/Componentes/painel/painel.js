import React, { useState, useRef } from "react";
import './painel.css';
import Logo from '../../../Logo2.png';
import Itadori from './itadori.jpg'; // Certifique-se de que o caminho está correto

// Componente de Painel
function Painel() {
    const [isClicked, setIsClicked] = useState(false);
    const contentPainelRef = useRef(null);

    const handleImageClick = () => {
        setIsClicked(!isClicked);

        const contentPainel = contentPainelRef.current;

        // Alternar entre classes de animação com toggle
        contentPainel.classList.toggle('move-left', !isClicked);
        contentPainel.classList.toggle('return-normal', isClicked);
    };

    const handleAnimationEnd = () => {
        const contentPainel = contentPainelRef.current;

        if (isClicked) {
            // Adiciona classe para mover para a esquerda quando a animação normal terminar
            contentPainel.classList.add('move-left-reverse');
        }
    };

    return (
        <div className="content-painel">
            
            <div
                ref={contentPainelRef}
                className={`content-painel-imagem ${isClicked ? 'clicked' : ''}`}
                onAnimationEnd={handleAnimationEnd}
            >
                {isClicked && (
                    <div className="bloco">
                        <h2>Título do Bloco</h2>
                        <p>Texto do bloco que aparece quando a imagem é clicada.</p>
                    </div>
                )}

                <div className="div-logo-desc">
                    <img
                        className={`logo-desc ${isClicked ? 'hidden' : ''}`}
                        src={Logo}
                        alt="logo"
                        onClick={handleImageClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Painel;
