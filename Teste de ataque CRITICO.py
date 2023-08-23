import random
import time

# Definindo as porcentagens 0.70, 0.20, 0.08, 0.02
probabilities = {
    1: 0.70,
    1.1: 0.20,
    1.2: 0.08,
    2.5: 0.02 
}

# Criando a lista baseada nas porcentagens
roulette = []
for number, probability in probabilities.items():
    roulette.extend([number] * int(probability * 100))

# Gradiente de velocidade da roleta
speed = 0.2
slowdown_factor = 0.70

# Simulando a rotação
print("Girando a roleta...")
for _ in range(10):
    random.shuffle(roulette)
    print("\r" + str(random.choice(roulette)), end="")
    time.sleep(speed)
    speed *= slowdown_factor

# Aguardando um tempo antes de parar
time.sleep(1)

resultado = random.choice(roulette)

if resultado == 2.5:
    print(f"\nUAU VOCÊ CONSEGUIU UM ACERTO CRITICO!!!!!!!\n {resultado}")
else:
    print(f"\nO golpe foi aumentado em: \n{resultado}")
