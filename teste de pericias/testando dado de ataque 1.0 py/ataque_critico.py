# Código do ataque com chances de ataque crítico
import random

# Dano base
dano_base = 250

chances_criticas = {
    1.0: 0.55,
    1.1: 0.20,
    1.2: 0.15,
    2.5: 0.08,
    10: 0.02
}

def simular_ataque_critico():
    resultado_roleta = random.uniform(0, 1)
    acumulador = 0

    for multiplicador, chance in chances_criticas.items():
        acumulador += chance
        if resultado_roleta <= acumulador:
            return multiplicador

multiplicador_ataque_critico = simular_ataque_critico()
dano_final = dano_base * multiplicador_ataque_critico

if multiplicador_ataque_critico == 10:
    print("CEEE TA DOIIIIIDODOOO BLACK FLASSHHH!!!!")
    print(f"Dano Base: {dano_base}")
    print(f"Multiplicador do Ataque Crítico: {multiplicador_ataque_critico}")
    print(f"Dano Final: {dano_final}")

elif multiplicador_ataque_critico == 2.5:
    print("ATAQUE CRITICO!!!!")
    print(f"Dano Base: {dano_base}")
    print(f"Multiplicador do Ataque Crítico: {multiplicador_ataque_critico}")
    print(f"Dano Final: {dano_final}")

else:
    print(f"Dano Base: {dano_base}")
    print(f"Multiplicador do Ataque Crítico: {multiplicador_ataque_critico}")
    print(f"Dano Final: {dano_final}")
