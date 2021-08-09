const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const pool = require('../dataBase/index')

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    async (req, email, password, done) => {
        const user = await userModel.getUser(email)
        const compare = bcrypt.compareSync(password, user.password)
        if (!user) {
            return done(null, false)
        }
        if (!compare) {
            return done(null, false);
        }
        return done(null, user);
    }
));

passport.serializeUser(function (user, done) {
    return done(null, user.cedula)
})

passport.deserializeUser(async (cedula, done) => {
    const user = await userModel.getUserById(cedula)
    done(null, user)
})