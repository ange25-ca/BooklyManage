// routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para el catálogo de productos
router.get('/', async (req, res) => {
    const Libros = await librosController.obtenerTodos();
    res.render('catalogo', { title: 'Catálogo de Libros', Libros, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;