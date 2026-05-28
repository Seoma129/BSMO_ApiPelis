const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mi_clave_secreta';

const validarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({
      error: 'Token requerido'
    });
  }

  // Formato esperado:
  // Authorization: Bearer TOKEN

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: 'Token inválido'
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    req.usuario = decoded;

    next();

  } catch (error) {
    return res.status(403).json({
      error: 'Token inválido o expirado'
    });
  }
};

module.exports = {
  validarToken,
  SECRET_KEY
};