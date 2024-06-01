const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para el detalle de los libros
router.get('/', librosController.obtenerTodos);

router.get('/:id', async (req, res) => {
    const idlibro = req.params.id;
    const libro = await librosController.obtenerPorId(idlibro);
    res.render('libro', { title: 'Detalle del Libro', libro, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;