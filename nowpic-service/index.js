const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/db');

const app = express();

dbConnection();

app.use('/users', require('./routes/users'));

app.listen(process.env.PORT, () => {
  console.log(`Conexión con el servidor establecida en el puerto ${process.env.PORT}`)
})