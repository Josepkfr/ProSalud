const router = require('express').Router();
const user = require('../controllers/user')
const passport = require('passport')

// const customerController = require('../controllers/customerController');

router.post('/login',passport.authenticate('login',{
    successRedirect:'/products',
    failureRedirect:'login'
}))
router.get('/login',user.userLogin)
router.get('/register',user.userRegister)
router.post('/register',user.register)

module.exports = router