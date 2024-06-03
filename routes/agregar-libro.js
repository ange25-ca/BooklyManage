/*const express = require('express');
const multer = require('multer');
const router = express.Router();
const { agregarLibro } = require('../controllers/agregarLibroController');

// Configura multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define la carpeta donde se guardarán las imágenes subidas
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define el nombre del archivo
  }
});

const upload = multer({ storage: storage });

// Define la ruta POST para agregar un nuevo libro, usando multer para manejar la subida de archivos
router.post('/', upload.single('imagen'), async (req, res) => {
  try {
    const { titulo, autor, ISBN, genero, fecha_publi, descripcion } = req.body;

    // Asegúrate de que req.file existe y tiene un path
    if (!req.file) {
      return res.status(400).send('No se ha subido ninguna imagen.');
    }
    const imagenPath = req.file.path;

    // Llama a la función agregarLibro y espera su resultado
    const resultado = await agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath);
    
    // Envía una respuesta con el resultado
    res.status(201).send(resultado);
  } catch (error) {
    // Maneja los errores y envía una respuesta de error
    console.error('Error al agregar el libro:', error);
    res.status(500).send('Error al agregar el libro');
  }
});

module.exports = router;*/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { agregarLibro } = require('../models/libroModel'); // Asegúrate de que la ruta sea correcta

// Configurar multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada archivo
  }
});
const upload = multer({ storage: storage });

// Ruta para manejar la solicitud POST para agregar un nuevo libro
router.post('/', upload.single('imagen'), async (req, res) => {
  const { titulo, autor, ISBN, genero, fecha_publi, descripcion } = req.body;
  const imagenPath = req.file ? req.file.path : null;

  if (!imagenPath) {
    return res.status(400).send('No se ha subido ninguna imagen.');
  }

  try {
    // Llamar a la función agregarLibro con los datos del libro
    await agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath);
    
    // Después de agregar el libro, redirige a la página de catálogo
    res.redirect('/catalogo');
  } catch (error) {
    console.error('Error al agregar el libro:', error);
    res.status(500).send('Error al agregar el libro');
  }
});

module.exports = router;
