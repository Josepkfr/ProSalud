const conexion = require('../dataBase/index')
module.exports = {
    query(text, params){
      return conexion.query(text, params, callback)
    },
    
    async getProducts(){
        try {
            res = await conexion.query('select * from producto')
            return res
        } catch (error) {
            console.log(error)
        }
    }
}