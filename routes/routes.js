const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Importa las rutas específicas
const home = require('./home');
const login = require('./login');
const registrar = require('./registrar');
const search = require('./search');
const registrarUsuario = require('./registrar-usuario');
const eliminarDelCatalogoRouter = require('./eliminar-libro');
const buscarLibroRouter = require('./buscar-libro');
const catalogoRouter = require('./catalogo');
const agregarLibroRouter = require('./agregar-libro.js');
const libroRouter = require('./libro');

//Configura las rutas
router.use('/', home);
router.use('/login', login);
router.use('/registrar', registrar);
router.use('/search', search);
router.use('/registrar-usuario', registrarUsuario);
router.use('/agregar-libro', agregarLibroRouter);
router.use('/eliminar-libro', eliminarDelCatalogoRouter);
router.use('/catalogo', catalogoRouter);
router.use('/buscar-libro', buscarLibroRouter);
router.use('/libro', libroRouter);

module.exports = router;