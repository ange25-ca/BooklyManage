const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para buscar los libros en la base de datos
router.get('/', async (req, res) => {
    const query = req.query.q.toLowerCase();
    const Libro = await librosController.obtenerTodos();
    const LibroFiltrados = Libro.filter(Libro =>
        Libro.titulo.toLowerCase().includes(query) || Libro.descripcion.toLowerCase().includes(query)
    );
    res.render('catalogo', { title: 'Resultados de la Búsqueda', Libros: LibroFiltrados, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;