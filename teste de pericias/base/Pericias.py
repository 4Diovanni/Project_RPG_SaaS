# arquivo: pericias.py

class Pericias:
    def __init__(self):
        # Atributos base do personagem
        self.conhecimento = 0
        self.sorte = 0
        self.vontade = 0
        self.destreza = 0
        self.fortitude = 0
        self.velocidade = 0
        self.forca = 0
        self.constituicao = 0
        self.defesa = 0

        # Dicionário para armazenar os bônus de perícias
        self.pericias = {
            "Intuição": 0,
            "Sobrevivência": 0,
            "Carisma": 0,
            "Aprendizado": 0,
            "Arcanismo": 0,
            "Intimidação": 0,
            "Natureza": 0,
            "Percepção": 0,
            "Persuasão": 0,
            "Religião": 0,
            "Furtividade": 0,
            "Iniciativa": 0,
            "Adestrar": 0,
            "Acrobacias": 0,
            "Inteligência": 0,
            "Domar": 0,
            "todos": 0
        }

    def calcular_pericia(self):
        bonus_maximo = 50  # qual o maximo de bonus no dado do player
        for pericia in self.pericias:
            # ... (cálculos de bônus para cada perícia)
            if pericia == "Intuição":
                self.pericias[pericia] = min(
                    round((self.sorte + self.vontade) / 15), bonus_maximo)
            elif pericia == "Sobrevivência":
                self.pericias[pericia] = min(
                    round((self.constituicao + self.sorte) / 12), bonus_maximo)
            elif pericia == "Carisma":
                self.pericias[pericia] = min(
                    round((self.conhecimento + self.sorte) / 10), bonus_maximo)
            elif pericia == "Aprendizado":
                self.pericias[pericia] = min(
                    round((self.conhecimento + self.fortitude) / 12), bonus_maximo)
            elif pericia == "Arcanismo":
                self.pericias[pericia] = min(
                    round((self.conhecimento + self.fortitude) / 15), bonus_maximo)
            elif pericia == "Intimidação":
                self.pericias[pericia] = min(
                    round((self.forca + self.vontade) / 18), bonus_maximo)
            elif pericia == "Natureza":
                self.pericias[pericia] = min(
                    round((self.conhecimento + self.sorte) / 15), bonus_maximo)
            elif pericia == "Percepção":
                self.pericias[pericia] = min(
                    round((self.pericias["Intuição"] + self.vontade) / 12), bonus_maximo)
            elif pericia == "Persuasão":
                self.pericias[pericia] = min(
                    round((self.pericias["Carisma"] + self.sorte) / 15), bonus_maximo)
            elif pericia == "Religião":
                self.pericias[pericia] = min(
                    round((self.conhecimento + self.vontade) / 18), bonus_maximo)
            elif pericia == "Furtividade":
                self.pericias[pericia] = min(
                    round((self.pericias["Acrobacias"] + self.velocidade) / 12), bonus_maximo)
            elif pericia == "Iniciativa":
                self.pericias[pericia] = min(
                    round((self.sorte + self.velocidade) / 14), bonus_maximo)
            elif pericia == "Adestrar":
                self.pericias[pericia] = min(
                    round((self.destreza + self.pericias["Aprendizado"]) / 8), bonus_maximo)
            elif pericia == "Acrobacias":
                self.pericias[pericia] = min(
                    round((self.destreza + self.velocidade) / 12), bonus_maximo)
            elif pericia == "Inteligência":
                self.pericias[pericia] = min(
                    round((self.conhecimento + self.vontade) / 18), bonus_maximo)
            elif pericia == "Domar":
                self.pericias[pericia] = min(
                    round((self.pericias["Adestrar"] + self.vontade) / 18), bonus_maximo)

    def mostrar_bonus_pericia(self, pericia):
        return self.pericias.get(pericia, "Perícia inválida")

    def mostrar_bonus_todos(self):
        pericias_disponiveis = ["Intuição", "Sobrevivência", "Carisma", "Aprendizado", "Arcanismo",
                                "Intimidação", "Natureza", "Percepção", "Persuasão", "Religião",
                                "Furtividade", "Iniciativa", "Adestrar", "Acrobacias", "Inteligência", "Domar"]
        bonus_string = ""
        for pericia_individual in pericias_disponiveis:
            bonus = self.pericias[pericia_individual]
            bonus_string += str(bonus) + ", "
        return bonus_string.rstrip(", ")  # Removendo a última vírgula e espaço
