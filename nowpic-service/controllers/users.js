const { response } = require("express");
const User = require("../models/user");

/**
 * Obtener usuarios
 */
const findAllUsers = async (req, res = response) => {
  try {
    return res.json({
      ok: true,
      msg: "Lista de usuarios",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Se ha producido un error al obtener los registros",
    });
  }
};

/**
 * Crear usuario
 */
const createUser = async (req, res = response) => {
  try {
    const user = new User({
      ...req.body
    });

    return res.json({
      ok: true,
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Se ha producido un error al crear el registro",
    });
  }
};

/**
 * Actualizar usuario
 */
const updateUser = async (req, res = response) => {
  const id = req.params.id; // id del usuario

  try {
    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Se ha producido un error al actualizar el registro",
    });
  }
};

/**
 * Eliminar usuario
 */
const deleteUser = async (req, res = response) => {
  const id = req.params.id; // id del libro

  try {
    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar el libro",
    });
  }
};

module.exports = {
  findAllUsers,
  createUser,
  updateUser,
  deleteUser
};
