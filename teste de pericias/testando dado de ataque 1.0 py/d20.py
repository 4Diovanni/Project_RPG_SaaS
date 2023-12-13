# Código do dado de 20 lados (D20)
import random

class D20:
    def __init__(self):
        self.valor = None

    def rolar(self):
        self.valor = random.randint(1, 20)

    def obter_resultado(self):
        return self.valor

def main_d20():
    print("Simulação de um dado de 20 lados (D20)")
    
    dado = D20()
    
    input("Pressione Enter para rolar o dado...")
    
    dado.rolar()
    
    resultado = dado.obter_resultado()
    
    print(f"Resultado: {resultado}")
