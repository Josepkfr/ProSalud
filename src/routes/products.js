const router = require("express").Router();
const productController = require("../controllers/products");
const { checkAuthenticated } = require("../helpers/authenticated");

router.get("/", checkAuthenticated, productController.fetchProducts);

module.exports = router;
