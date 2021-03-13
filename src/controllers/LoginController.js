const User = require('../models/User');
const TokenBlackList = require('../models/TokenBlackList');
const Auth = require('./AuthController');
const {Op} = require('sequelize');
const crypto = require('crypto');

module.exports = {
    // REALIZA LOGIN RETORNANDO UM TOKEN
    async create(request, response) {
        let {credential, password} = request.body;
        let token;

        // Transforma a senha em um Hash MD5 para comparar com o dado do banco de dados
        password = crypto.createHash('md5').update(password).digest('hex');

        // Busca usuário onde a senha e o username ou o email corresponde ao passado pela requisição
        const userExists = await User.findOne({
            where: {
                [Op.or]: [
                    {username: credential, password},
                    {email: credential, password}
                ], 
        }});

        // Verifica se o usuário existe no banco de dados
        if (!userExists)
            return response.status(404).json({'error': "Username doesn't exists or the password is wrong"});

        // Tenta criar o token com o id do usuário
        try {
            token = await Auth.create({
                "id": userExists.id,
            });

        }
        catch (error) {
            return response.status(500).json({'error': error});

        }

        return response.status(200).json({token});
    },

    // REALIZA O LOGOUT
    async delete(request, response) {
        const token = request.headers.authorization;

        // Verifica se o token existe na blacklist
        if (tokenExists) 
            return response.status(204).send();

        // Tenta adicionar o token na blacklist
        try {
            await TokenBlackList.create({token});
        }
        catch(error) {
            return response.status(500).json({'error': error});
        }

        return response.status(204).send();
    }
}