// controllers/Libros.js
const LibroModel = require('../models/libroModel');

async function obtenerTodos() {
  return await LibroModel.obtenerTodos();
}

async function obtenerPorId(id) {
  return await LibroModel.obtenerPorId(id);
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
};