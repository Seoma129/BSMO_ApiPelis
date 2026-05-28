const Pelicula = require('../modules/peliculas.model');

const getAll = async () => {
  return await Pelicula.findAll();
};

const getById = async (id) => {
  return await Pelicula.findByPk(id);
};

const create = async (data) => {
  return await Pelicula.create(data);
};

const update = async (id, data) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;

  await pelicula.update(data);
  return pelicula;
};

const remove = async (id) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;

  await pelicula.destroy();
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};