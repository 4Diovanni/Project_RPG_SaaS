// Simulação de um dado de 20 lados (D20)
function d20() {
    console.log("Simulação de um dado de 20 lados (D20)");
  
    const resultado = Math.floor(Math.random() * 20) + 1;
  
    console.log(`Resultado: ${resultado}`);
  
    if (resultado >= 2 && resultado <= 5) {
      console.log("Ruim doido!");
    } else if (resultado >= 6 && resultado <= 10) {
      console.log("Ta normal maluco");
    } else if (resultado >= 11 && resultado <= 15) {
      console.log("Ta muito massa doido!");
    } else if (resultado >= 16 && resultado <= 19) {
      console.log("SAI DA FRENTE DONA MARIA!");
    } else if (resultado === 1) {
      console.log("Eu vo morre?");
    } else if (resultado === 20) {
      console.log("OLHA O FLESHE PRETO DOIDO TA ESCURO!");
    }
}
