// Simulação de um dado de 20 lados (D20)
function d20(){
console.log("Simulação de um dado de 20 lados (D20)");

const resultado = Math.floor(Math.random() * 20) + 1;

console.log(`Resultado: ${resultado}`);
}