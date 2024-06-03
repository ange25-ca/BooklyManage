const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');
//FUNCIONA PERO NO ELIMINA DE LA VISTA:
// Ruta para eliminar un producto del catálogo
router.post('/:id', async (req, res) => {
  try {
      const LibroId = parseInt(req.params.id);
      
      // Obtener todos los libros nuevamente
      const catalogo = await librosController.obtenerTodos();
      //console.log('Valor de catalogo:', catalogo);
      // Encontrar el índice del libro a eliminar en el catálogo
      const itemIndex = catalogo.findIndex(libro => parseInt(libro.id) === LibroId);
      
      if (itemIndex !== -1) {
          // Eliminar el libro del catálogo
          const removedItem = catalogo.splice(itemIndex, 1)[0];
          
          // Eliminar el libro de la base de datos
          await librosController.eliminarLibro(req.user.id, LibroId, req.cookies.token);
      }
      
      // Redirigir de vuelta al catálogo
      res.redirect('/catalogo');
  } catch (error) {
      console.error('Error al eliminar el libro del catálogo:', error);
      res.status(500).send('Error al eliminar el libro del catálogo');
  }
});

module.exports = router;
