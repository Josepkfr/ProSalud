const router = require('express').Router();
const controller = require('../controllers/index')
const user = require('../controllers/user')

// const customerController = require('../controllers/customerController');

router.get('/',controller.list)

module.exports = router
