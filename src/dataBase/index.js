const {Pool} = require('pg')

const database={
    user:"postgres",
    host:"localhost",
    database:"ProSalud",
    password:"1234",
    port:"5432"
}
const pool=new Pool(database)

module.exports = {
    query(text, params){
      return pool.query(text, params, callback)
    },
    
    async getProducts(){
        try {
            res = await pool.query('select * from producto')
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

