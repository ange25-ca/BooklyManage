// controllers/Libros.js
const libroModel = require('../models/libroModel');

async function obtenerTodos() {
  return await libroModel.obtenerTodos();
}

async function obtenerPorId(id) {
  return await libroModel.obtenerPorId(id);
}

async function agregarLibro(req, res) {
  try {
    const { titulo, autor, ISBN, genero, fecha_publi, descripcion} = req.body;

    // Asegúrate de que req.file existe y tiene un path
    if (!req.file) {
      return res.status(400).send('No se ha subido ninguna imagen.');
    }
    const imagenPath = req.file.path;

    // Llama a la función agregarLibro del modelo y espera su resultado
    const resultado = await libroModel.agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath);
    
    // Envía una respuesta con el resultado
    res.status(201).send(resultado);
  } catch (error) {
    // Maneja los errores y envía una respuesta de error
    console.error('Error al agregar el libro:', error);
    res.status(500).send('Error al agregar el libro');
  }
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  agregarLibro
};

