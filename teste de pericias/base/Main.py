# arquivo: main.py

from pericias import Pericias
from personagens import Personagens
from escolher_personagem import escolher_personagem

if __name__ == "__main__":
    personagens_manager = Personagens()
    escolher_personagem(personagens_manager)
    #pericias = Pericias
    # Restante do seu código...
