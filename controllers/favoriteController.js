// controllers/favoriteController.js
const favoriteModel = require('../models/favoriteModel');

async function agregarLibros(usuarioId, LibroId, token) {
    return await favoriteModel.agregarLibros(usuarioId, LibroId, token);
}

async function obtenerLibros(usuarioId, token) {
    return await favoriteModel.obtenerLibros(usuarioId, token);
}

module.exports = {
    agregarLibros,
    obtenerLibros,
};