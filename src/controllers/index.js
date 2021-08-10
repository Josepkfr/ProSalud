const db = require('../models/products')
const user = require('./user')

const controller = { user }
controller.list = async (req, res, next) => {
    try {
        return res.render("index")
    } catch (error) {
        next(error)
    }
}
module.exports = controller