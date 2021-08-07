const router = require('express').Router();


router.get("/",(req,res)=>{
    res.render('products/products')
})

module.exports = router