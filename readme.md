# API de gestão do cadastro de Livros

A API a seguir é uma uma API RESTful desenvolvida para cumprimento de um projeto acadêmico para finalizar a segunda sprint da Pós Graduação da turma de Dev Foundations da FIAP, feita para gerenciar um cadastro de livros.
O projeto foi desenvolvido utilizando Node.JS, Express e Sequelize.
Também há um Front End desenvolvido em React, que pode ser utilizado em conjunto com este Back End, que você pode encontrar clicando [Aqui](https://github.com/oldfrogg/front_livros_fiap).

---


## Pré-requisitos
- Node.JS 20.9.0
- NPM (Já está incluso no Node.JS)
- MySQL Server 8.4.6
- Express 5.1.0
- Sequelize 6.37.7
- Swagger-JSDoc 6.2.8
- Swagger-UI-Express 5.0.1

## Instalando o projeto

Lembrar de, a cada instalação que altere as variáveis de ambiente do sistema, reiniciar o terminal e/ou o editor.

### 1 - Instalando e configurando o MySQL Server
- Baixe o MySQL Server no [site oficial do MySQL](https://dev.mysql.com/downloads/), de acordo com seu Sistema Operacional, na versão completa (maior arquivo). Instale-o e configure-o, inclusive nas variáveis de ambiente do sistema.
Lembrar de deixar (ou inserir) porta 3306. 

IMPORTANTE! O usuário e senha aqui devem ser anotados, para uso nos próximos passos.

No CMD do Windows, caso precise parar o MySQL server, execute o comando:
```bash
net stop mysql84
```
Atenção! O 84 refere-se à versão 8.4. Ajuste o comando de acordo com sua versão.

Talvez seja necessário utilizar mysql80, a depender de sua versão instalada e SO.

No Linux, usando o systemctl:
```bash
sudo systemctl stop mysql
```

No MacOS, usando o Homebrew:
```bash
brew services stop mysql
```

Para iniciar novamente, basta trocar o "stop" por "start".


### 2 - Clonando o repositório
- Caso tenha o git instalado e configurado nas variáveis de ambiente do sistema, clonar através do
```bash
git clone https://github.com/oldfrogg/back_livros_fiap
cd back_livros_fiap
```
- Também é possível fazer o download do projeto diretamente através do Github.

### 3 - Instalando as dependências
- Abrir o diretório do arquivo através do terminal e instalar as dependências necessárias:

```bash
npm install
```

### 4 - Criando o arquivo .env na raiz do projeto
- Abra o projeto no editor de sua preferência, e, na raiz do projeto, crie um arquivo ".env" e insira as variáveis de ambiente, conforme sua escolha:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=suasenha
DB_NAME=LIVROS_FIAP
DB_PORT=3306
PORT=3000
```

Atenção! O nome do BD deve ser exatamente "LIVROS_FIAP" (sem aspas), pois é o nome utilizado no comando SQL de criação do BD.
Atenção! Seu usuário e senha definidos aqui devem ser os mesmos criados no passo 1.

### 5 - Criando o BD
- No terminal, estando na raiz do projeto, execute o seguinte comando para criar o BD. Pode ser solicitado a senha criada anteriormente:
```bash
mysql -u root -p < ./src/config/database.sql
```

### 6 - Verificações no package.json
- Confirme se no "script" do package.json há o seguinte comando, caso não, insira-o:
    "start": "node src/app.js"

- Confirme se o "main" do package.json está o seguinte valor associado: "src/app.js". Caso não, altere-o.

### 7 - Executando a aplicação
- Execute o comando, para rodar a aplicação:
```
npm start
```

### 8 - Utilizando a API
- Após seguir todos os passos, já será possível utilizar a API, do modo de sua preferência. A recomendação do autor é utilizar a partir do Front End desenvolvido, relatado no início do Readme, onde terá uma interface gráfica e acesso a todos os comandos da API.

## Rotas

### LIVROS
- /listar_livros - GET - Listar todos os livros
- /buscar_livro/:id - GET - Mostrar um livro específico a partir de seu ID
- /criar_livro" - POST - Criar um livro
- /editar_livro/:id - PUT - Atualizar um livro existente a partir do seu ID
- /deletar_livro/:id - DELETE - Deletar um cliente do BD a partir do seu ID


## Autor
O projeto foi desenvolvido por Jhonatta Tavares.

## Licença

Licença MIT, portanto, é de livre uso, alteração e publicação.

