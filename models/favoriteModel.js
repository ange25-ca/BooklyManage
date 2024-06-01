/*const axios = require('axios');

class favoriteBook{
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

async function agregarLibros(usuarioId, LibroId, token) {
    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios.post(`${process.env.BASE_URL}/favoritos/agregar`, {
            usuarioId,
            LibroId,
        }, axiosConfig);
        return response.data;
    } catch (error) {
        console.error('Error al agregar el libro a favoritos:', error);
        throw error;
    }
}

async function obtenerLibros(usuarioId, token) {
    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios.get(`${process.env.BASE_URL}/favoritos${usuarioId}`, axiosConfig);
        return response.data.map(Libro => new favoriteBook(
            Libro.usuarioId,
            Libro.titulo,
            Libro.autor,
            Libro.ISBN,
            Libro.genero,
            Libro.descripcion,
            Libro.imagen,
        ));
    } catch (error) {
        console.error('Error al obtener los favoritos del usuario:', error);
        throw error;
    }
}

module.exports = {
    agregarLibros,
    obtenerLibros
};*/