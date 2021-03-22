const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const cryptography = require('../helpers/cryptography');

// CRIA A ESTRUTURA DA TABELA "user"
const UserSchema = sequelize.define('user', {
    id:{ 
        type:Sequelize.INTEGER, 
        autoIncrement:true, 
        allowNull:false, 
        primaryKey:true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    defaultScope: {
        attributes: { exclude: ['password'] },
    },
});

// Cria o hash da senha antes de criar um novo usuário no banco
UserSchema.beforeCreate(async (user, options) => {
    const hashedPassword = cryptography(user.password);

    user.password = hashedPassword;
});

module.exports = UserSchema;