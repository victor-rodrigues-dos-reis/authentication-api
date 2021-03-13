const User = require('../models/User');
const Auth = require('../controllers/AuthController');
const {Op} = require('sequelize');

module.exports = {
    // CRIA UM USUÁRIO
    async create(request, response) {
        const {username, email, password} = request.body;
        let createdUser;

        // Seleciona o usuário com o username ou o email informado
        const userExists = await User.findOne({
            where: {
                [Op.or]: [{username}, {email}]
            }
        });

        // Verifica se há usuário como o username ou o email informado
        if (userExists)
            return response.status(406).json({'error': 'Username or email already being used'});
        
        // Tenta cadastrar o usuário
        try {
            createdUser = await User.create({username, email, password});
        }
        catch(error) {
            return response.status(500).json({'error': error});
        }

        // Tenta criar o token com o id do usuário
        const token = await Auth.create({
            "id": createdUser.id,
        });

        return response.status(201).json({token});
    },
};