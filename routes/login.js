//routes/login.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para proteger rutas
const favoriteController = require('../controllers/favoriteController');

// Ruta para mostrar el formulario de login
router.get('/', (req, res) => {
  res.render('login', { title: 'Iniciar sesión', user: req.user != null ? `${req.user.nombre}` : '' });
});


router.post('/', passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: true
}), async (req, res) => {
  // Si se autentica correctamente, crea un token JWT
  const token = authMiddleware.generateToken(req.user.id, '1h');

  res.cookie('token', token, { httpOnly: true, secure: false });

  let favoritos = res.locals.favoritos;

  if (favoritos) {
    await duplicarfavoritosEnDB(req.user.id, favoritos, token);
  }

  res.redirect('/favoritos');
});


async function duplicarfavoritosEnDB(usuarioId, favoritos, token) {
  for (const Libro in favoritos) {
    console.log('Libros: ' + favoritos[Libro].nombre);

    await favoriteController.agregarLibros(usuarioId, favoritos[Libro].id, favoritos[Libro].cantidad, token);
  }
}

module.exports = router;