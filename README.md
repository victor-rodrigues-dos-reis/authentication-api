<h1  align='center'> 🔐 API de Autenticação</h1>

<h3  align='center'>
Sistema de autenticação para ser utilizado em APIs com o objetivo de realizar o cadastramento, login e logout de usuários através de rotas.
</h3>

<p align='center'>
	<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/victor-rodrigues-dos-reis/authentication-api?color=%ff000061">
	<img alt="Repository size" src="https://img.shields.io/github/repo-size/victor-rodrigues-dos-reis/authentication-api">
	<a href="https://github.com/victor-rodrigues-dos-reis/authentication-api/commits">
	    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/victor-rodrigues-dos-reis/authentication-api">
	</a>
	<a href="https://github.com/victor-rodrigues-dos-reis">
	    <img alt="Autor: Victor" src="https://img.shields.io/badge/author-Victor_Reis-%237519C1">
	 </a>
</p>
 
 <h4 align='center'> ✅ Projeto Concluído ✅</h4>

## 📋 Tabela de conteúdo
* [Tabela de Conteúdo](#-tabela-de-conteúdo)
* [Funcionalidades](#-funcionalidades)
* [Como executar o projeto](#-como-executar-o-projeto)
	* [Pré-requisitos](#-pré-requisitos)
	* [Rodando a API](#-rodando-a-API)
* [Tecnologias](#-Tecnologias)
* [Autor](#%EF%B8%8F-autor)
  

## 💡 Funcionalidades
 - [x] Cadastro de usuário
 - [x] Login do usuário
 - [x] Logout do usuário


## 🚀 Como executar o projeto

### 📝 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com/).

### 💾 Configurando Banco de Dados
Para o sistema funcionar é necessário criar um banco de dados MySQL com o nome "db_authenticate_api" no localhost com o usuário root e a senha vazia.
Caso deseje colocar um nome, host, tipo de banco (MariaDB, PostgreSQL, ...) ou outra informação de sua preferência, basta trocar as constantes do arquivo [./src/database/index.js](https://github.com/victor-rodrigues-dos-reis/authentication-api/blob/main/src/database/index.js).
  
### 🎲 Rodando a API
```bash
# Clone este repositório
$ git clone https://github.com/victor-rodrigues-dos-reis/authentication-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd authentication-api

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```  

### ⛷️ Configurando Postman
Para experimentar o sistema foi disponibilizado a [collection do Postman](https://github.com/victor-rodrigues-dos-reis/authentication-api/blob/main/postman-collection.json) já com a estrutura da requisição de cada rota da API, basta realizar a importação através do arquivo ou pela [url do arquivo no Github](https://raw.githubusercontent.com/victor-rodrigues-dos-reis/authentication-api/main/postman-collection.json).

## 🧰 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Crypto](https://nodejs.org/api/crypto.html)
- [Express](https://expressjs.com/pt-br/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)  

## ✒️ Autor

<a  href="https://github.com/victor-rodrigues-dos-reis">
<img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/35310267?s=100"  alt="autor"/>  
<br />
<a  href="https://github.com/victor-rodrigues-dos-reis">
	<sub><b>Victor Reis</b> 🐱‍👤</sub>
</a>
</a>

Feito com ❤️ por Victor Reis 👋🏽 [Entre em contato!](https://www.linkedin.com/in/victor-rodrigues-dos-reis/)

<br />

[![Linkedin Badge](https://img.shields.io/badge/-Victor_Reis-0A66C2?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/victor-rodrigues-dos-reis/)](https://www.linkedin.com/in/victor-rodrigues-dos-reis/) [![Gmail Badge](https://img.shields.io/badge/-victor--rodrigues--dos--reis@hotmail.com-0078D4?style=flat-square&logo=Microsoft-Outlook&logoColor=white&link=mailto:victor-rodrigues-dos-reis@hotmail.com)](mailto:victor-rodrigues-dos-reis@hotmail.com)
