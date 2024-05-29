const axios = require('axios');
const dotenv = require('dotenv');

//Configura DotEnv
dotenv.config();

class Libro {
  constructor(id, titulo, autor, ISBN, genero, fecha_publi, descripcion, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ISBN = ISBN;
    this.genero = genero;
    this.fecha_publi = fecha_publi;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

async function obtenerTodos() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/libro`);
    const libro = response.data;
    return libro.map(libro => new Libro(libro.id,
      libro.titulo, libro.descripcion, libro.imagen));
  } catch (error) {
    console.error('Error al obtener todos los productos:', error);
    throw error;
  }
}

async function obtenerPorId(id) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/libro${id}`);
    const libro = response.data;
    return new Libro(
        libro.id, libro.titulo, libro.autor, libro.ISBN,
        libro.genero,libro.fecha_publi, libro.descripcion, libro.imagen);
  } catch (error) {
    console.error('Error al obtener los libros por ID:', error);
    throw error;
  }
}

module.exports = {
  obtenerTodos,
  obtenerPorId
};