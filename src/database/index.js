const { Sequelize } = require('sequelize');

const DATABASE  = 'db_authenticate_api';
const HOST      = 'localhost';
const USER      = 'root';
const PASSWORD  = '';
const DIALECT   = 'mysql';

// Configurando o banco de dados
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  logging: false    // Desabilita a apresentação dos comandos sendo executado (select, insert, ...)
});

module.exports = sequelize;