const userModel = require('../models/user')


const User={
    async login(req,res,next){
        try {
           const user = await userModel.getUser(req.body.correo)
           if(user){
               if (user.password==req.body.password) {
                   console.log(req.body.password)                   
                   res.send("hola")
               } else {   
                   res.send("contraseña Incorrecta")
               }
           }
           else{
               res.send("no Existe")
           }
        } catch (error) {
            next(error)
        }
    },

    async userLogin(req,res){
        res.render('user/login')
    }
}

module.exports = User