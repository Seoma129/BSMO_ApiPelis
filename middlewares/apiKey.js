const validarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== '12345') {
    return res.status(403).json({ error: 'API KEY inválida' });
  }

  next();
};

module.exports = validarApiKey;