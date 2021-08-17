const pool = require('../dataBase/index')
const bcrypt = require('bcrypt')
const format = require('pg-format')
format.config()


const usuario = {};

usuario.list = (req, res) => {
  req.connect((err, conn) => {
    conn.query('SELECT * FROM usuario', (err, usuarios) => {
     if (err) {
      res.json(err);
     }
     res.render('usuarios', {
        data: usuarios
     });
    });
  });
};

usuario.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.connect((err, connection) => {
    const query = connection.query('INSERT INTO usuario set ?', data, (err, usuario) => {
      console.log(usuario)
      res.redirect('/');
    })
  })
};

usuario.edit = (req, res) => {
  const { id } = req.params;
  req.connect((err, conn) => {
    conn.query("SELECT * FROM usuario WHERE id = ?", [id], (err, rows) => {
      res.render('usuarios_edit', {
        data: rows[0]
      })
    });
  });
};

usuario.update = (req, res) => {
  const { id } = req.params;
  const newUsuario = req.body;
  req.connect((err, conn) => {

  conn.query('UPDATE usuario set ? where id = ?', [newUsuario, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

usuario.delete = (req, res) => {
  const { id } = req.params;
  req.connect((err, connection) => {
    connection.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;



/* const conexion = require('../dataBase/index')
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
            return res.rows
        } catch (error) {
            console.log(error)
        }
    },

    async getUser(email) {
        try {
            const sql = format('select * from usuario where email = %L', email)
            user = await conexion.query(sql)
            return user.rows[0]
        } catch (error) {
            console.log(error)
        }
    },

    async getUserById(cedula) {
        try {
            const sql = format('select * from usuario where cedula = %L', cedula)
            user = await conexion.query(sql)
            return user.rows[0]
        } catch (error) {
            console.log(error)
        }
    },

    async registerUser({cedula,nombre,direccion,telefono,fecha,email,password}){
        try {
            const hash = bcrypt.hashSync(password,10)
            password=hash
            const sql = format('insert into usuario values (%L,%L,%L,%L,%L,%L,%L)',cedula,nombre,direccion,telefono,fecha,email,password)
            await conexion.query(sql) 
            return  await getUser(email)         
        } catch (error) {
            return error
        }
    }
}
 */