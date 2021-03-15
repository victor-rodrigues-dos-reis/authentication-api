const { Sequelize } = require('sequelize');

const DATABASE  = process.env.DB_NAME;
const HOST      = process.env.DB_HOST;
const USER      = process.env.DB_USER;
const PASSWORD  = process.env.DB_PASSWORD;
const DIALECT   = process.env.DB_DIALECT;

// Configurando o banco de dados
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  logging: false    // Desabilita a apresentação dos comandos sendo executado (select, insert, ...)
});

module.exports = sequelize;