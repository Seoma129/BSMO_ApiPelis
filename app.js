const express = require('express');
const app = express();

const sequelize = require('./config/database');

const logger = require('./middlewares/logger');
const validarApiKey = require('./middlewares/apiKey');
const { validarToken } = require('./middlewares/auth');

const peliculasRoutes = require('./routes/peliculas.routes');
const authRoutes = require('./routes/auth.routes');

app.use(express.json());

// Middleware logger
app.use(logger);

// Middleware API KEY
app.use(validarApiKey);

// Ruta login SIN token
app.use('/api', authRoutes);

// Middleware JWT
app.use(validarToken);

// Rutas protegidas
app.use('/api', peliculasRoutes);

sequelize.sync().then(() => {

  console.log('Base de datos conectada');

  const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

});