const db = require('../models/products')
const user = require('./user')

const controller={user}
controller.list= async (req,res,next)=>{
    try {
        const { rows }= await db.getProducts()
        console.log(rows)
        res.render("index")
    } catch (error) {
        next(error)
    }
}
module.exports = controller