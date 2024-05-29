const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para proteger rutas

// Ruta para el carrito de compra
router.get('/', authMiddleware.authenticate, async (req, res) => {
    let favoritos = res.locals.favoritos;

    res.render('favoritos', { title: 'FAVORITOS', favoritos, user: req.user != null ? `${req.user.nombre}` : '' });
});

module.exports = router;