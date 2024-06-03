/*const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');

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

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      ISBN: this.ISBN,
      genero: this.genero,
      fecha_publi: this.fecha_publi,
      descripcion: this.descripcion,
      imagen: this.imagen
    };
  }

}

async function obtenerTodos() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/libros`);
    const libros = response.data;
    return libros.map(libro => new Libro(libro.id,
      libro.titulo, libro.autor, libro.ISBN, libro.genero,
      libro.fecha_publi, libro.descripcion, libro.imagen));
  } catch (error) {
    console.error('Error al obtener todos libros:', error);
    throw error;
  }
}

async function obtenerPorId(id) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/libros/${id}`);
    const libro = response.data;
    return new Libro(
        libro.id, libro.titulo, libro.autor, libro.ISBN,
        libro.genero,libro.fecha_publi, libro.descripcion, libro.imagen);
  } catch (error) {
    console.error('Error al obtener los libros por ID:', error);
    throw error;
  }
}

// Define la función para agregar un libro
async function agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath) {
  if (!titulo) {
    throw new Error('El título del libro es requerido');
  }

  try {
    const libroData = {
      titulo,
      autor,
      ISBN,
      genero,
      fecha_publi,
      descripcion,
      imagen: fs.createReadStream(imagenPath)
    };

    // Realiza la solicitud HTTP para agregar el libro
    const response = await axios.post(`${process.env.BASE_URL}/agregar-libro`, libroData);

    if (response.status === 201) {
      return 'Libro agregado correctamente';
    } else {
      throw new Error('Error al agregar el libro');
    }
  } catch (error) {
    console.error('Error al agregar el libro:', error.response ? error.response.data : error.message);
    throw error;
  }
}


module.exports = {
  obtenerTodos,
  obtenerPorId,
  agregarLibro
};*/

const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');
const FormData = require('form-data');

// Configura DotEnv
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

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      ISBN: this.ISBN,
      genero: this.genero,
      fecha_publi: this.fecha_publi,
      descripcion: this.descripcion,
      imagen: this.imagen
    };
  }
}

async function obtenerTodos() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/libros`);
    const libros = response.data;
    return libros.map(libro => new Libro(
      libro.id, libro.titulo, libro.autor, libro.ISBN, libro.genero,
      libro.fecha_publi, libro.descripcion, libro.imagen));
  } catch (error) {
    console.error('Error al obtener todos libros:', error);
    throw error;
  }
}

async function obtenerPorId(id) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/libros/${id}`);
    const libro = response.data;
    return new Libro(
      libro.id, libro.titulo, libro.autor, libro.ISBN, libro.genero,
      libro.fecha_publi, libro.descripcion, libro.imagen);
  } catch (error) {
    console.error('Error al obtener los libros por ID:', error);
    throw error;
  }
}

// Define la función para agregar un libro
async function agregarLibro(titulo, autor, ISBN, genero, fecha_publi, descripcion, imagenPath) {
  if (!titulo) {
    throw new Error('El título del libro es requerido');
  }

  try {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('autor', autor);
    formData.append('ISBN', ISBN);
    formData.append('genero', genero);
    formData.append('fecha_publi', fecha_publi);
    formData.append('descripcion', descripcion);
    formData.append('imagen', fs.createReadStream(imagenPath));

    // Realiza la solicitud HTTP para agregar el libro
    const response = await axios.post(`${process.env.BASE_URL}/agregar-libro`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 201) {
      return 'Libro agregado correctamente';
    } else {
      throw new Error('Error al agregar el libro');
    }
  } catch (error) {
    console.error('Error al agregar el libro:', error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
  agregarLibro
};
