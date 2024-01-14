CREATE DATABASE IF NOT EXISTS projetoSaaS;
USE projetoSaaS;

CREATE TABLE IF NOT EXISTS Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    numero VARCHAR(15),
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipoDeUsuario VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Player (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    nivel INT NOT NULL,
    idade INT,
    tipoDePoder VARCHAR(255),
    forca INT,
    destreza INT,
    constituicao INT,
    vontade INT,
    conhecimento INT,
    fortitude INT,
    sorte INT,
    velocidade INT,
    defesa INT
);


CREATE TABLE IF NOT EXISTS Pericias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor INT NOT NULL
);

INSERT  INTO  Pericias (nome, valor) VALUES
    ('Intuição', 0),
    ('Sobrevivência', 0),
    ('Carisma', 0),
    ('Aprendizado', 0),
    ('Arcanismo', 0),
    ('Intimidação', 0),
    ('Natureza', 0),
    ('Percepção', 0),
    ('Persuasão', 0),
    ('Religião', 0),
    ('Furtividade', 0),
    ('Iniciativa', 0),
    ('Adestrar', 0),
    ('Acrobacias', 0),
    ('Inteligência', 0),
    ('Domar', 0);
