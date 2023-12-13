function calcularDanoBase(idade, nivel, vontade, forca, destreza) {
    const baseMultiplier = 0.6;
    let danoBase = (vontade + forca + destreza) * (1 + Math.floor(nivel / 10) * baseMultiplier);
  
    if (idade < 15) {
      let reducaoPorcentagem = 5 * (15 - idade);
      let fatorReducao = 1 - reducaoPorcentagem / 100;
      danoBase *= fatorReducao;
    }
  
    if (idade === 0) {
      danoBase = 1;
    }
  
    return Math.round(danoBase);
  }
  
  // Testando a função com os valores do exemplo
  var DanoBasico = calcularDanoBase(1, 5, 12, 18, 15);
  
  // Exibindo o resultado no console
  console.log("idade: " + 1);
  console.log("o dano base é: " + DanoBasico);
  console.log("a vontade é: " + 12);
  console.log("a forca é: " + 18); 
  console.log("a destreza é: " + 15);
  