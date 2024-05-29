const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


// Importa las rutas específicas
const home = require('./home');
const login = require('./login');
const registrar = require('./registrar');
const search = require('./search');
const registrarUsuario = require('./registrar-usuario');
const catalogoRouter = require('./catalogo');
const buscarLibroRouter = require('./buscar-libro');
const libroRouter = require('./libro');
const favoritosRouter = require('./favoritos');
const agregarAFavoritos = require('./agregar-favorite');
const eliminarfavoritosRouter = require('./eliminar-favoritos');

//Configura las rutas
router.use('/', home);
router.use('/login', login);
router.use('/registrar', registrar);
router.use('/search', search);
router.use('/registrar-usuario', registrarUsuario);
router.use('/catalogo', catalogoRouter);
router.use('/buscar-libro', buscarLibroRouter);
router.use('/libro', libroRouter);
router.use('/favoritos', authMiddleware.authenticate, favoritosRouter);
router.use('/agregar-favoritos', agregarAFavoritos);
router.use('/eliminar-favoritos', eliminarfavoritosRouter);

module.exports = router;