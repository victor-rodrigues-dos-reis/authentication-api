const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const crypto = require('crypto');

// CRIA A ESTRUTURA DA TABELA "token_black_list"
const TokenBlackListSchema = sequelize.define('token_black_list', {
    id:{ 
        type:Sequelize.INTEGER, 
        autoIncrement:true, 
        allowNull:false, 
        primaryKey:true
    }, 
    token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: Sequelize.DATE,
},{
    updatedAt: false,
});

// Cria o hash do token antes de adicionĂ¡-lo a lista negra
TokenBlackListSchema.beforeCreate(async (tokenBlackList, options) => {
    const hashed = crypto.createHash('md5').update(tokenBlackList.token).digest('hex');;
    tokenBlackList.token = hashed;
});

module.exports = TokenBlackListSchema;