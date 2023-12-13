// Simulação de um ataque crítico
function critico(){
const danoBase = 250;

const chancesCriticas = {
    1.0: 0.55,
    1.1: 0.20,
    1.2: 0.15,
    2.5: 0.08,
    10: 0.02
};

const resultadoRoleta = Math.random();
let acumulador = 0;
let multiplicadorAtaqueCritico;

for (const [multiplicador, chance] of Object.entries(chancesCriticas)) {
    acumulador += chance;
    if (resultadoRoleta <= acumulador) {
        multiplicadorAtaqueCritico = parseFloat(multiplicador);
        break;
    }
}

const danoFinal = danoBase * multiplicadorAtaqueCritico;

if (multiplicadorAtaqueCritico === 10) {
    console.log("CEEE TA DOIIIIIDODOOO BLACK FLASSHHH!!!!");
} else if (multiplicadorAtaqueCritico === 2.5) {
    console.log("ATAQUE CRITICO!!!!");
}

console.log(`Dano Base: ${danoBase}`);
console.log(`Multiplicador do Ataque Crítico: ${multiplicadorAtaqueCritico}`);
console.log(`Dano Final: ${danoFinal}`);
}