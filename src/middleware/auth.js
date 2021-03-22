const jwt = require('jsonwebtoken');
const TokenBlackList = require('../models/TokenBlackList');
const cryptography = require('../helpers/cryptography');

const tokenSecret = process.env.TOKEN_SECRET;

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    let decodedToken;



    
    // Verifica se foi enviado um token na requisição
    if (!authHeader)
        return response.status(400).json({'error': 'No tokens provided'});
    



    const parts = authHeader.split(' ');

    // Verifica se o token NÃO contém 2 partes
    // Normalmente um token tem uma extrutura semelhante a isso "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZpY3RvclJlaXMiLCJpYXQiOjE2MTU2NjA3OTQsImV4cCI6MTYxNTc0NzE5NH0.makGJQSy-EG66Y4dibh4ugNFy-kaC8r4ziDj7RWNBNQ"
    if (parts.length !== 2)
        return response.status(400).json({'error': 'Badly formatted token'});




    const [scheme, token] = parts;

    // Verifica se a primeira parte do token contém a palavra "Bearer"
    if (!scheme.includes('Bearer'))
        return response.status(400).json({'error': 'Badly formatted token'});



    const randomChar = authHeader.charAt(6);
    const tokenHashed = cryptography(authHeader);

    // Pesquisa pelo token na blacklist
    const tokenExists = await TokenBlackList.findOne({where: {token: tokenHashed}});

    // Verifica se o token ja foi desativado
    if (tokenExists)
        return response.status(401).json({'error': 'Token disabled'});




    // Verifica se o token informado é válido
    try {
        decodedToken = jwt.verify(token, tokenSecret);

    } catch (error) {
        return response.status(401).json({'error': 'Invalid token'});
    }
    
    // Adiciona o conteúdo do token ao parâmetro request
    request.token = decodedToken;

    return next();
}