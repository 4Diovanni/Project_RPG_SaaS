# arquivo: personagens.py

class Personagens:
    personagens_atributos = {
        "Alisson": {"conhecimento": 21, "sorte": 9, "vontade": 21, "destreza": 22, "fortitude": 25, "velocidade": 30,"forca": 45, "constituicao": 40},
        "Nall": {"conhecimento": 34, "sorte": 20, "vontade": 26, "destreza": 31, "fortitude": 16, "velocidade": 17, "forca": 33, "constituicao": 28},
        "Lyn": {"conhecimento": 19, "sorte": 4, "vontade": 21, "destreza": 3, "fortitude": 10, "velocidade": 11, "forca": 17, "constituicao": 11},
        "Slime": {"conhecimento": 12, "sorte": 19, "vontade": 2, "destreza": 6, "fortitude": 10, "velocidade": 1, "forca": 10, "constituicao": 18},
        "Futsuu": {"conhecimento": 35, "sorte": 30, "vontade": 25, "destreza": 22, "fortitude": 25, "velocidade": 20, "forca": 18, "constituicao": 26},
        "Jason": {"conhecimento": 15, "sorte": 17, "vontade": 12, "destreza": 17, "fortitude": 10, "velocidade": 3, "forca": 20, "constituicao": 3},
        "Islime": {"conhecimento": 26, "sorte": 17, "vontade": 13, "destreza": 20, "fortitude": 6, "velocidade": 6, "forca": 2, "constituicao": 22},
        "Aldyr": {"conhecimento": 16, "sorte": 1, "vontade": 9, "destreza": 20, "fortitude": 4, "velocidade": 8, "forca": 15, "constituicao": 17},
        "????": {"conhecimento": 4, "sorte": 11, "vontade": 1, "destreza": 17, "fortitude": 5, "velocidade": 11, "forca": 19, "constituicao": 5},
        "Gecko": {"conhecimento": 17, "sorte": 4, "vontade": 4, "destreza": 7, "fortitude": 17, "velocidade": 6, "forca": 20, "constituicao": 15},

        # Adicione outros personagens com seus atributos aqui...
    }

    def new_personagem(self, meu_personagem, personagem_escolhido):
        atributos = self.personagens_atributos.get(personagem_escolhido)
        if atributos:
            meu_personagem.__dict__.update(atributos)

    def obter_atributos_personagem(self, personagem_escolhido):
        return self.personagens_atributos.get(personagem_escolhido, {})

    def personagem_existe(self, personagem_escolhido):
        return personagem_escolhido in self.personagens_atributos

    # ... (outras funcionalidades relacionadas a personagens)
