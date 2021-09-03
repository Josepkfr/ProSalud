const modelProducts = require("../models/products");
const products = {
  async fetchProducts(req, res, next) {
    try {
      const { rows } = await modelProducts.getProducts();
      return res.render("products/products", {
        products: rows,
        title: "Productos",
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = products;
