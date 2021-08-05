const conexion = require('../dataBase/index')
const bcrypt = require('bcrypt')
const format = require('pg-format')
format.config()

module.exports = {
    query(text, params) {
        return conexion.query(text, params, callback)
    },

    async getUsers() {
        try {
            res = await conexion.query('select * from usuario')
            return res
        } catch (error) {
            console.log(error)
        }
    },

    async getUser(email) {
        try {
            const sql = format('select nombre,email,password from usuario where email = %L', email)
            user = await conexion.query(sql)
            return user.rows[0]
        } catch (error) {
            console.log(error)
        }
    },

    async registerUser({cedula,nombre,direccion,telefono,fecha,email,password}){
        try {
            const sql = format('insert into usuario values (%L,%L,%L,%L,%L,%L,%L)',cedula,nombre,direccion,telefono,fecha,email,password)
            user = await conexion.query(sql)
            return user.rows[0]
        } catch (error) {
            return error
        }
    }
}