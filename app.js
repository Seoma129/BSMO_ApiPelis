const express = require('express');
const app = express();
const sequelize = require('./config/database');

const logger = require('./middlewares/logger');
const validarApiKey = require('./middlewares/apiKey');

const peliculasRoutes = require('./routes/peliculas.routes');

app.use(express.json());

// Middlewares globales
app.use(logger);
app.use(validarApiKey);

// Rutas
app.use('/api', peliculasRoutes);

// Inicializar DB
sequelize.sync().then(() => {
  console.log('Base de datos conectada');
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
});