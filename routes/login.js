const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
  // Renderiza la vista index sin el texto cifrado
  res.render('login');
});

module.exports = router;