const router = require("express").Router();
const userController = require("../controllers/user");
const passport = require("passport");
const { checkAuthenticatedAdmin } = require("../helpers/authenticated");

// const customerController = require('../controllers/customerController');

router.get("/login", checkAuthenticated, userController.userLogin);
router.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/products",
    failureRedirect: "login",
  })
);
router.get("/register", checkAuthenticated, userController.userRegister);
router.post("/register", userController.register);
router.get("/logout", userController.userLogout);
router.get("/all", checkAuthenticatedAdmin, userController.allUsers);
router.get("/edit/:cedula", checkAuthenticatedAdmin, userController.getUser);
router.post("/edit/:cedula", checkAuthenticatedAdmin, userController.editUser);
router.get(
  "/delete/:cedula",
  checkAuthenticatedAdmin,
  userController.deleteUser
);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/products");
  }
  return next();
}

module.exports = router;
