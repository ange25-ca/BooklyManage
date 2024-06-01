// controllers/Libros.js
const libroModel = require('../models/libroModel');

async function obtenerTodos() {
  return await libroModel.obtenerTodos();
}

async function obtenerPorId(id) {
  return await libroModel.obtenerPorId(id);
}

module.exports = {
  obtenerTodos,
  obtenerPorId,
};