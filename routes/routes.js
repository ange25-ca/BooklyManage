const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const home = require('./home');
//const login = require('./login');
//const registro = require('./registro');
//const registrarUsuario = require('./registrar-usuario');


//Configura las rutas
router.use('/', home);
//router.use('/login', login);s
//router.use('/registro', registro);
//router.use('/registrar-usuario', registrarUsuario);

module.exports = router;