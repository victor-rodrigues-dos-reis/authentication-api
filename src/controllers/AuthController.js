const jwt = require('jsonwebtoken');

module.exports = {
    // CRIA O TOKEN DE AUTENTICAÇÃO
    async create(params) {
        const tokenSecret = process.env.TOKEN_SECRET;
        const token = await jwt.sign(params, tokenSecret, {
            expiresIn: 86400    // Token expirará em 1 dia
        });
        
        return token;
    }
}