function personagem(){
const personagens = {
    "Alisson": {
        nome: "Alisson",
        nivel: 20,
        idade: 25,
        tipoDePoder: "ki",
        forca: 45,
        destreza: 22,
        constituicao: 40,
        vontade: 12,
        conhecimento: 21,
        fortitude: 25
    },
    "Nall": {
        nome: "Nall",
        nivel: 19,
        idade: 19,
        tipoDePoder: "ki",
        forca: 33,
        destreza: 31,
        constituicao: 28,
        vontade: 15,
        conhecimento: 34,
        fortitude: 16
    },
    "Lyn": {
        nome: "Lyn",
        nivel: 8,
        idade: 8,
        tipoDePoder: "magia",
        forca: 17,
        destreza: 3,
        constituicao: 11,
        vontade: 21,
        conhecimento: 19,
        fortitude: 10
    },
    "Slime": {
        nome: "Slime",
        nivel: 2,
        idade: 2,
        tipoDePoder: "magia",
        forca: 10,
        destreza: 6,
        constituicao: 18,
        vontade: 2,
        conhecimento: 12,
        fortitude: 10
    },
    "Futsuu": {
        nome: "Futsuu",
        nivel: 10,
        idade: 10,
        tipoDePoder: "ki",
        forca: 18,
        destreza: 22,
        constituicao: 26,
        vontade: 25,
        conhecimento: 35,
        fortitude: 25
    },
    "Jason": {
        nome: "Jason",
        nivel: 20,
        idade: 20,
        tipoDePoder: "magia",
        forca: 20,
        destreza: 17,
        constituicao: 3,
        vontade: 12,
        conhecimento: 15,
        fortitude: 10
    },
    "Islime": {
        nome: "Islime",
        nivel: 2,
        idade: 2,
        tipoDePoder: "magia",
        forca: 2,
        destreza: 20,
        constituicao: 22,
        vontade: 13,
        conhecimento: 26,
        fortitude: 6
    },
    "Aldyr": {
        nome: "Aldyr",
        nivel: 2,
        idade: 2,
        tipoDePoder: "magia",
        forca: 15,
        destreza: 20,
        constituicao: 17,
        vontade: 9,
        conhecimento: 16,
        fortitude: 4
    },
    "????": {
        nome: "????",
        nivel: 4,
        idade: 4,
        tipoDePoder: "ki",
        forca: 19,
        destreza: 17,
        constituicao: 5,
        vontade: 1,
        conhecimento: 4,
        fortitude: 5
    },
    "Gecko": {
        nome: "Gecko",
        nivel: 5,
        idade: 5,
        tipoDePoder: "magia",
        forca: 20,
        destreza: 7,
        constituicao: 15,
        vontade: 4,
        conhecimento: 17,
        fortitude: 17
    }
    // Adicione outros personagens conforme necessário
};

}
  function obterAtributosDoPersonagem(nomePersonagem) {
    const personagem = personagens[nomePersonagem];
  
    if (!personagem) {
      console.error(`Personagem "${nomePersonagem}" não encontrado.`);
      return null;
    }
  
    const { idade, nivel, vontade, forca, destreza } = personagem;
    return { idade, nivel, vontade, forca, destreza };
  }
  