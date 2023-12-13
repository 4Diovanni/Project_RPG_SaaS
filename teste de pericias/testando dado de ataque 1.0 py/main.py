from d20 import D20
from personagem import personagens, calcular_dano_fisico, calcular_dano_ki, calcular_dano_magico

def main():
    """
    Função principal que permite escolher um personagem, girar o dado e calcular o dano.
    """
    # Exibir personagens disponíveis
    print("Personagens disponíveis:")
    for nome in personagens:
        print(nome)

    # Permitir que o usuário escolha qual personagem verificar
    nome_personagem = input("Escolha o nome do personagem: ")

    # Verificar se o personagem escolhido existe na lista
    if nome_personagem in personagens:
        nivel_personagem = personagens[nome_personagem].nivel
        personagem_escolhido = personagens[nome_personagem]
        tipo_de_poder_personagem = personagem_escolhido.tipo_de_poder

        # Girar o dado D20
        print("Girando o dado D20...")
        dado = D20()
        dado.rolar()
        resultado_dado = dado.obter_resultado()

        print(f"Resultado do dado D20: {resultado_dado}")

        # Calcular o dano com base no resultado do dado
        if resultado_dado == 1:  # Se o dado der 1, não acerta o dano
            print("Não acertou o dano.")
        else:
            dano_fisico = calcular_dano_fisico(personagem_escolhido, nivel_personagem, tipo_de_poder_personagem)
            dano_ki = calcular_dano_ki(personagem_escolhido, nivel_personagem, tipo_de_poder_personagem)
            dano_magico = calcular_dano_magico(personagem_escolhido, nivel_personagem, tipo_de_poder_personagem)

            print(f"Dano Físico para {nome_personagem}: {dano_fisico}")
            print(f"Dano KI para {nome_personagem}: {dano_ki}")
            print(f"Dano Mágico para {nome_personagem}: {dano_magico}")
    else:
        print(f"Personagem {nome_personagem} não encontrado.")

if __name__ == "__main__":
    main()  # Chama a função principal se o script for executado diretamente
