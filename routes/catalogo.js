const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

// Ruta para el catálogo de libros
router.get('/', async (req, res) => {
    try {
        const libros = await librosController.obtenerTodos();
        //console.log(libros); // Verifica los datos obtenidos
        res.render('catalogo', { 
            title: 'Catálogo de Libros', 
            libros,  // Se pasan 'libros' a la vista
            user: req.user != null ? `${req.user.nombre}` : '' 
        });
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        res.status(500).send('Error al obtener los libros');
    }
});

module.exports = router;
