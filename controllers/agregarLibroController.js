const libroModel = require('../models/libroModel');
const fs = require('fs');
const path = require('path');

async function agregarLibro(req, res) {
  try {
    // Obtener los datos del libro del cuerpo de la solicitud
    const { titulo, autor, ISBN, genero, fecha_publi, descripcion } = req.body;

    /// Dentro del controlador agregarLibro
    if (req.file && req.file.error) {
    console.error('Error al subir la imagen:', req.file.error);
    return res.status(500).send('Error al subir la imagen');
    }
    //Convertir la ruta de la imagen a una ruta absoluta
    const imagenPath = path.resolve(req.file.path);

    // Llamar a la función del modelo para agregar el libro a la base de datos
    const resultado = await libroModel.agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath);

    // Enviar una respuesta con el resultado
    res.status(201).send(resultado);
  } catch (error) {
    // Manejar errores y enviar una respuesta de error
    console.error('Error al agregar el libro:', error);
    res.status(500).send('Error al agregar el libro');
  }
}

module.exports = {
  agregarLibro
}

