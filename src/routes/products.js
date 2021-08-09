const router = require('express').Router();


router.get("/",isAuthenticated,(req,res)=>{
    res.render('products/products')
})

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/user/login')
  }

module.exports = router