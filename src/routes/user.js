const router = require('express').Router();
const user = require('../controllers/user')

// const customerController = require('../controllers/customerController');

router.post('/login',user.login)
router.get('/login',user.userLogin)
router.get('/register',user.userRegister)
router.post('/register',user.register)

module.exports = router