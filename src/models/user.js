const conexion = require("../dataBase/index");
const bcrypt = require("bcrypt");
const format = require("pg-format");
format.config();

module.exports = {
  query(text, params) {
    return conexion.query(text, params, callback);
  },

  async getUsers() {
    try {
      res = await conexion.query("select * from usuario");
      return res.rows;
    } catch (error) {
      console.log(error);
    }
  },

  async getUser(email) {
    try {
      const sql = format("select * from usuario where email = %L", email);
      user = await conexion.query(sql);
      return user.rows[0];
    } catch (error) {
      console.log(error);
    }
  },

  async getUserById(cedula) {
    try {
      const sql = format("select * from usuario where cedula = %L", cedula);
      user = await conexion.query(sql);
      return user.rows[0];
    } catch (error) {
      console.log(error);
    }
  },

  async registerUser({
    cedula,
    nombre,
    direccion,
    telefono,
    fecha,
    email,
    password,
  }) {
    try {
      const hash = bcrypt.hashSync(password, 10);
      password = hash;
      const sql = format(
        "insert into usuario values (%L,%L,%L,%L,%L,%L,%L)",
        cedula,
        nombre,
        direccion,
        telefono,
        fecha,
        email,
        password
      );
      await conexion.query(sql);
      return await getUser(email);
    } catch (error) {
      return error;
    }
  },

  async editUser({ cedula, nombre, direccion, telefono, email }, id) {
    try {
      const sql = format(
        "update usuario set cedula=%L,nombre=%L,direccion=%L,telefono=%L,email=%L where cedula = %L",
        cedula,
        nombre,
        direccion,
        telefono,
        email,
        id
      );
      console.log(sql);
      await conexion.query(sql);
    } catch (error) {
      return error;
    }
  },
};
