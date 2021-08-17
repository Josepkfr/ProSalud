
const {Pool} = require('pg')

const database={
    user:"postgres",
    host:"localhost",
    database:"ProSalud",
    password:"1234",
    port:"5432"
}
const pool=new Pool(database)
pool.connect()
.then(()=>console.log("Database connected"))
.catch(error=>console.log("Error al conectarse",error.stack))

module.exports=pool;
