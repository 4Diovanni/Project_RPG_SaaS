# Código da classe Personagem e cálculos de danos
import math

class Personagem:
    def __init__(self, nome, nivel, tipo_de_poder, forca, destreza, constituicao, vontade, conhecimento, fortitude):
        self.nome = nome
        self.nivel = nivel
        self.tipo_de_poder = tipo_de_poder
        self.forca = forca
        self.destreza = destreza
        self.constituicao = constituicao
        self.vontade = vontade
        self.conhecimento = conhecimento
        self.fortitude = fortitude

def calcular_dano_fisico(personagem, nivel, tipo_de_poder):
    dano_base = (personagem.vontade + personagem.forca + personagem.destreza) * (nivel / (nivel / 2))
    dano_base *= math.exp(nivel / 10)
    if tipo_de_poder == "ki":
        dano_base *= 1.35  # Acréscimo de 35% no dano de ki
    return round(dano_base)

def calcular_dano_ki(personagem, nivel, tipo_de_poder):
    dano_base = (personagem.constituicao + personagem.vontade + personagem.forca + personagem.fortitude) * (nivel / (nivel / 2))
    dano_base *= math.exp(nivel / 10)
    if tipo_de_poder == "magia":
        dano_base *= 0.52  # Redução de 48% no dano de ki
    return round(dano_base)

def calcular_dano_magico(personagem, nivel, tipo_de_poder):
    dano_base = (personagem.constituicao + personagem.conhecimento + personagem.vontade + personagem.forca) * (nivel / (nivel / 2))
    dano_base *= math.exp(nivel / 10)
    if tipo_de_poder == "ki":
        dano_base *= 0.52  # Redução de 48% no dano de ki
    elif tipo_de_poder == "magia":
        dano_base *= 1.4  # Acréscimo de 40% no dano mágico
    return round(dano_base)

# Lista de personagens
personagens = {
    "Alisson": Personagem(nome="Alisson", nivel=20, tipo_de_poder="ki", forca=45, destreza=22, constituicao=40, vontade=12, conhecimento=21, fortitude=25),
    "Nall": Personagem(nome="Nall", nivel=19, tipo_de_poder="ki", forca=33, destreza=31, constituicao=28, vontade=15, conhecimento=34, fortitude=16),
    "Lyn": Personagem(nome="Lyn", nivel=8, tipo_de_poder="magia", forca=17, destreza=3, constituicao=11, vontade=21, conhecimento=19, fortitude=10),
    "Slime": Personagem(nome="Slime", nivel=2, tipo_de_poder="magia", forca=10, destreza=6, constituicao=18, vontade=2, conhecimento=12, fortitude=10),
    "Futsuu": Personagem(nome="Futsuu", nivel=10, tipo_de_poder="ki", forca=18, destreza=22, constituicao=26, vontade=25, conhecimento=35, fortitude=25),
    "Jason": Personagem(nome="Jason", nivel=20, tipo_de_poder="magia", forca=20, destreza=17, constituicao=3, vontade=12, conhecimento=15, fortitude=10),
    "Islime": Personagem(nome="Islime", nivel=2, tipo_de_poder="magia", forca=2, destreza=20, constituicao=22, vontade=13, conhecimento=26, fortitude=6),
    "Aldyr": Personagem(nome="Aldyr", nivel=2, tipo_de_poder="magia", forca=15, destreza=20, constituicao=17, vontade=9, conhecimento=16, fortitude=4),
    "????": Personagem(nome="????", nivel=4, tipo_de_poder="ki", forca=19, destreza=17, constituicao=5, vontade=1, conhecimento=4, fortitude=5),
    "Gecko": Personagem(nome="Gecko", nivel=5, tipo_de_poder="magia", forca=20, destreza=7, constituicao=15, vontade=4, conhecimento=17, fortitude=17),
}
