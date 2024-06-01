// controllers/favoriteController.js
const favoriteModel = require('../models/favoriteModel');

async function agregarLibros(usuarioId, LibroId, token) {
    return await favoriteModel.agregarLibros(usuarioId, LibroId, token);
}

module.exports = {
    agregarLibros,
    obtenerLibros,
};