// routes/index.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); 

// Rutas públicas
router.get('/', authMiddleware.authenticate, (req, res) => {
  res.render('search', { title: req.user != null ? `Bienvenido a BlooklyManage ${req.user.nombre}` : 'BooklyManage', user: req.user != null ? `${req.user.nombre}` : ''});
});

module.exports = router;