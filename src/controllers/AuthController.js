const jwt = require('jsonwebtoken');

module.exports = {
    // CRIA O TOKEN DE AUTENTICAÇÃO
    async create(params) {
        const tokenSecret = process.env.TOKEN_SECRET;
        const token = await jwt.sign(params, tokenSecret, {
            expiresIn: process.env.TOKEN_EXPIRES_IN  
        });
        
        return token;
    }
}