const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const home = require('./home');
const login = require('./login');
const register = require('./register');
const search = require('./search');
//const registrarUsuario = require('./registrar-usuario');


//Configura las rutas
router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/search', search);
//router.use('/registrar-usuario', registrarUsuario);

module.exports = router;