const db = require('../dataBase/index')

const controller={}
controller.list= async (req,res)=>{
    try {
        const { rows }= await db.getProducts()
        console.log(rows)
        res.render("index")
    } catch (error) {
        next(error)
    }
}
module.exports = controller