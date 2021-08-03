const {Pool} = require('pg')

const database={
    user:"postgres",
    host:"localhost",
    database:"ProSalud",
    password:"1234",
    port:"5432"
}
const pool=new Pool(database)

const getProducts=async()=>{
    try {
        const res=await pool.query('select * from producto')
        console.log(res.rows)
    } catch (error) {
        console.log(error)
    }
}
getProducts();