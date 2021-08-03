const router = require('express').Router();
const controller = require('../controllers/index')

// const customerController = require('../controllers/customerController');

router.get('/',controller.list)

router.get('/login',(req,res)=>{
    res.render("login",{titulo:'titulo dinamico'})
})

module.exports = router
