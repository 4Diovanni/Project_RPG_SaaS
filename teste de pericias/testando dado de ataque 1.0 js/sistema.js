const personagens = require('./personagem');
const calcularDanoBase = require('./calcularDano');

function calcularDanoPersonagem(nomePersonagem) {
  const atributosPersonagem = personagens.obterAtributosDoPersonagem(nomePersonagem);

  if (atributosPersonagem) {
    const dano = calcularDanoBase(atributosPersonagem);

    console.log(`Dano do ${nomePersonagem}: ${dano}`);
  }
}

// Exemplo de uso
const nomePersonagemSelecionado = "Alisson";
calcularDanoPersonagem(nomePersonagemSelecionado);
