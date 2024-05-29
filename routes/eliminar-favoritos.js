const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');
const favoriteController = require('../controllers/favoriteController');

// Ruta para eliminar un libro de favorito 
router.post('/:id', async (req, res) => {
    const idLibro = parseInt(req.params.id);
    let favoritos = res.locals.favoritos;
    const itemIndex = favoritos.findIndex(item => parseInt(item.id) === idLibro);
    if (itemIndex !== -1) {
      const removedItem = favoritos.splice(itemIndex, 1)[0];
      await favoriteController.quitarLibros(req.user.id, idLibro, req.cookies.token);
      const Libro = await librosController.obtenerPorId(idLibro);
      if (Libro) {
        Libro.cantidad += removedItem.cantidad;
        await librosController.actualizarFavoritos(Libro.cantidad, idLibro, req.cookies.token);
      }
    }
    res.locals.favoritos = favoritos;
    res.redirect('/favoritos');
});

module.exports = router;