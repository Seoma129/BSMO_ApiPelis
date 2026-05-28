const express = require('express');
const router = express.Router();
const service = require('../services/peliculas.service');

router.get('/peliculas', async (req, res) => {
  const data = await service.getAll();
  res.json(data);
});

router.get('/peliculas/:id', async (req, res) => {
  const data = await service.getById(req.params.id);
  if (!data) return res.status(404).json({ error: 'No encontrada' });

  res.json(data);
});

router.post('/peliculas', async (req, res) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
});

router.put('/peliculas/:id', async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ error: 'No encontrada' });

  res.json(data);
});

router.delete('/peliculas/:id', async (req, res) => {
  const data = await service.remove(req.params.id);
  if (!data) return res.status(404).json({ error: 'No encontrada' });

  res.json({ mensaje: 'Eliminada correctamente' });
});

module.exports = router;