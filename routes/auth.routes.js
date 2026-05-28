const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../middlewares/auth');

router.post('/login', (req, res) => {

  const { usuario, password } = req.body;

  // Usuario de prueba
  if (usuario === 'admin' && password === '1234') {

    const token = jwt.sign(
      {
        usuario: usuario
      },
      SECRET_KEY,
      {
        expiresIn: '1h'
      }
    );

    return res.json({
      mensaje: 'Login exitoso',
      token
    });
  }

  res.status(401).json({
    error: 'Credenciales incorrectas'
  });
});

module.exports = router;