const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/user/login");
};

const checkAuthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.cedula == "1750783647") {
      return next();
    }
    res.redirect("/user/login");
  }
  res.redirect("/user/login");
};

module.exports = { checkAuthenticated, checkAuthenticatedAdmin };
