const {Router} = require('express');

const authMiddleware = require('./middleware/auth');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const routes = Router();


// Rota de realização de login
routes.post('/login', LoginController.create);

// Rota de cadastramento de usuário
routes.post('/signup', UserController.create);

// Rota de realização de logout
routes.delete('/logout', authMiddleware, LoginController.delete)

module.exports = routes;