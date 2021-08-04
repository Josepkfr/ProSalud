const router = require('express').Router();
const user = require('../controllers/user')

// const customerController = require('../controllers/customerController');

router.post('/login',user.login)
router.get('/login',user.userLogin)

module.exports = router