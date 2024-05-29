const express = require('express');
const router = express.Router();
const LibrosController = require('../controllers/librosController');
const favoriteController = require('../controllers/favoriteController');

// Ruta para agregar un libro a fovoritos
router.post('/:id', async (req, res) => {
    const idLibro = req.params.id;
    const libro = await LibrosController.obtenerPorId(idLibro);
    if (libro && libro.cantidad > 0) {
        let favoriteBook;
        if(res.locals.favoriteBook.length > 0){
            favoriteBook = res.locals.favoriteBook;
        } else {
            favoriteBook = req.session.favoriteBook || [];
        }
        let libroEnFavorite = favoritos.find(item => parseInt(item.id) === parseInt(idLibro));
        if (libroEnFavorite) {
            libroEnFavorite.cantidad++;
            if(req.hasOwnProperty('user')){
                await favoriteController.agregarLibros(req.user.id, idLibro, libroEnFavorite.cantidad, req.cookies.token);
            }
        } else {
            favoritos.push({ id: idLibro, titulo: libro.titulo, precio: libro.precio, cantidad: 1 , imagen: libro.imagen});
            if(req.hasOwnProperty('user')){
                await favoriteController.agregarLibros(req.user.id, idLibro, 1, req.cookies.token);
            }
        }
        libro.cantidad--;
        if(req.hasOwnProperty('user')){
            await LibrosController.actualizarFavoritos(libro.cantidad, idLibro, req.cookies.token);
        }
        if(res.locals.favoritos.length > 0){
            res.locals.favoritos = favoritos;
        } else {
            req.session.favoritos = favoritos;
        }
        res.redirect('/catalogo');
    } else {
        res.status(404).send('Producto no encontrado o no disponible');
    }
  });  

module.exports = router;