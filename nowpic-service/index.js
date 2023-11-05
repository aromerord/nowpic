const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/db');

const app = express();

// Conexión con la BD
dbConnection();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/users', require('./routes/users'));

// Levantar la aplicación
app.listen(process.env.PORT, () => {
  console.log(`Conexión con el servidor establecida en el puerto ${process.env.PORT}`)
})