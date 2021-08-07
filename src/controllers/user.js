const userModel = require('../models/user')
const bcrypt = require('bcrypt')


const User = {
    async login(req, res, next) {
        try {
            const user = await userModel.getUser(req.body.correo)
            if (user) {
                const compare = await bcrypt.compareSync(req.body.password, user.password)
                if (compare) {
                    res.redirect('/products')
                } else {
                    res.send("contraseña Incorrecta")
                }
            }
            else {
                res.send("no Existe")
            }
        } catch (error) {
            next(error)
        }
    },

    async userLogin(req, res) {
        res.render('user/login')
    },

    async userRegister(req, res) {
        res.render('user/register')
    },

    async register(req, res) {
        try {
            let todayDate = new Date().toISOString().slice(0, 10);
            req.body.fecha = todayDate
            const user = await userModel.registerUser(req.body)
            res.redirect('/user/login')
            return user
        } catch (error) {
            res.render("error")
            next(error)
        }
    }
}

module.exports = User