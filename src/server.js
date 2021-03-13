const express = require('express');
const routes = require('./routes');
const database = require('./database');

const server = express();

// Inicializa o banco de dados (cria as tabelas)
database.sync();

// Habilita o parse do JSON quando a requisição for do tipo "application/json"
server.use(express.json());

// Utiliza as rotas criadas
server.use(routes);

// Rota do servidor na porta 3333
server.listen(3333, () => console.log('SERVER IS RUNNING'));