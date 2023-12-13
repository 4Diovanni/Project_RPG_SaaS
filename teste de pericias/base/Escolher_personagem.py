# arquivo: escolher_personagem.py
from pericias import Pericias

def escolher_personagem(personagens_manager):
    personagens = ["Alisson", "Nall", "Lyn", "Slime", "Futsuu", "Jason", "Islime", "Aldyr", "????", "Gecko"]
    print("Personagens disponíveis:")
    for index, nome in enumerate(personagens):
        print(f"{index}. {nome}")
    escolha = int(input("Escolha o número do personagem: "))
    personagem_escolhido = personagens[escolha]

    if personagens_manager.personagem_existe(personagem_escolhido):
        while True:
            meu_personagem = Pericias()
            personagens_manager.new_personagem(meu_personagem, personagem_escolhido)
            meu_personagem.calcular_pericia()

            pericia_escolhida = input(
                "Escreva a perícia desejada (com a primeira letra maiúscula), ou 'todos' para ver todas as perícias:\n")

            if pericia_escolhida == "todos":
                todos_os_bonus = meu_personagem.mostrar_bonus_todos()
                print(f"Bônus de todas as perícias: {todos_os_bonus}")
            else:
                bonus_pericia = meu_personagem.mostrar_bonus_pericia(pericia_escolhida)
                if bonus_pericia != "Perícia inválida":
                    print(f"Bônus de {pericia_escolhida}: {bonus_pericia}")
                else:
                    print("Perícia inválida.")

            escolha2 = input(
                "Deseja ver outros Personagens ou voltar para Perícia? (1/2)\n")
            if escolha2 == "1":
                personagem_escolhido = escolher_personagem(personagens_manager)
                continue  # Reinicia o loop com um novo personagem escolhido
            elif escolha2 == "2":
                continue  # Reinicia o loop para escolher outra perícia
            else:
                break  # Sai do loop se a escolha não for "personagens" ou "perícia"
    else:
        print("Personagem não reconhecido.")
