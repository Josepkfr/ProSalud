const router = require('express').Router();
const productController= require('../controllers/products')


router.get("/",checkAuthenticated,productController.fetchProducts)

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/user/login')
  }

module.exports = router