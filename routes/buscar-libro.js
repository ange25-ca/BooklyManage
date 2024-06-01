const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para buscar los libros en la base de datos
router.get('/', async (req, res) => {
    try {
        const query = req.query.q ? req.query.q.toLowerCase() : '';
        const libros = await librosController.obtenerTodos();
        const librosFiltrados = libros.filter(libro =>
            libro.titulo.toLowerCase().includes(query) || libro.descripcion.toLowerCase().includes(query)
        );
        //console.log(librosFiltrados); // Verifica los datos filtrados
        res.render('catalogo', { 
            title: 'Resultados de la Búsqueda', 
            libros: librosFiltrados, 
            user: req.user != null ? `${req.user.nombre}` : '' 
        });
    } catch (error) {
        console.error('Error al buscar los libros:', error);
        res.status(500).send('Error al buscar los libros');
    }
});

module.exports = router;
