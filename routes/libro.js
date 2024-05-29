const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para el detalle de producto
router.get('/:id', async (req, res) => {
    const idLibro = req.params.id;
    const Libro = await librosController.obtenerPorId(idLibro);
    res.render('libro', { title: 'Detalle del Libro', Libro, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;