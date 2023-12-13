// Declare variables for character attributes

// Personagem com 25 anos
var nivel = 5;
var idade = 1;
var vontade = 12;
var forca = 18;
var destreza = 15;

// Ajuste para causar exatamente 100 de dano
const baseMultiplier = 0.6;

// Calcular o dano base real sem o fator de idade
let danoBase = (vontade + forca + destreza) * (1 + Math.floor(nivel / 10) * baseMultiplier);

// Se a idade for menor que 15, aplicar redução proporcional
if (idade < 15) {
  let reducaoPorcentagem = 5 * (15 - idade); // Suponha uma redução de 5% por unidade de diferença de idade
  let fatorReducao = 1 - reducaoPorcentagem / 100;
  danoBase *= fatorReducao;
}

// Se a idade for 0, definir o dano como 1
if (idade === 0) {
  danoBase = 1;
}

// Exibir o resultado no console
console.log("idade: " + idade);
console.log("o dano base é: " + Math.round(danoBase)); 
console.log("a vontade é: " + vontade);
console.log("a forca é: " + forca); 
console.log("a destreza é: " + destreza); 
