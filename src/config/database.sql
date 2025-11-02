CREATE SCHEMA IF NOT EXISTS LIVROS_FIAP;

USE LIVROS_FIAP;

CREATE TABLE livros (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200) NOT NULL,
autor VARCHAR(100) NOT NULL,
ano INT NOT NULL,
editora VARCHAR(100) NOT NULL,
link_capa VARCHAR(500)
);


INSERT INTO livros (nome, autor, ano, editora, link_capa) VALUES
('O Grande Gatsby', 'Fitzgerald', 1920, 'Editora JT', 'https://m.media-amazon.com/images/I/81xjr9TiTtL._AC_UF1000,1000_QL80_.jpg');

