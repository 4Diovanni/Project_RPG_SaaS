import React from "react";
import './ImagemFicha.css';

function ImagemFicha() {
  return (
    <div className="layout-container-2a">
      <div className="image-section">
        <div className="img-ficha-box"></div> {/* Idealmente, você adicionaria uma imagem aqui via CSS ou diretamente via props */}
        <div className="btns-flex">
        <button className="btn-alter">Alterar imagem</button>
        <button className="btn-choose">Escolher imagem</button>
        </div>
      </div>

      <div className="descricao-box">
        <div className="character-info">
          <div className="character-field"><strong>Nome: </strong> <span> Nome do Personagem</span></div>
          <div className="character-field"><strong>Idade: </strong> <span> Idade do Personagem</span></div>
          <div className="character-field"><strong>Classe: </strong> <span> Classe do Personagem</span></div>
          <div className="character-field"><strong>Raça: </strong> <span> Raça do Personagem</span></div>
          <div className="character-field"><strong>Descendência: </strong> <span> Descendência do Personagem</span></div>
        </div>
        
        <div className="character-story">
          "Aqui irá ter um texto simples na ficha do personagem."
        </div>
      </div>
    </div>
  );
}

export default ImagemFicha;
