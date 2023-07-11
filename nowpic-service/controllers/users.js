const { response } = require('express');

const findAllUsers = async (req, res = response) => {
  try {
    return res.json({
      ok: true,
      msg: 'Lista de juegos'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Se ha producido un error al obtener los registros'
    });
  }
};

module.exports = {
  findAllUsers
}