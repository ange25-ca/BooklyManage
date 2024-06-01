// routes/index.js
const express = require('express');
const router = express.Router();

// Rutas públicas
router.get('/', (req, res) => {
  res.render('search', { title: req.user != null ? `Bienvenido ${req.user.nombre}` : 'BooklyManage', user: req.user != null ? `${req.user.nombre}` : ''});
});

module.exports = router;