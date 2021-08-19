const User = require("../models/user");

const user = {
  async userLogin(req, res) {
    return res.render("user/login");
  },

  async userRegister(req, res) {
    return res.render("user/register");
  },

  async userLogout(req, res) {
    req.logout();
    return res.redirect("/");
  },

  async register(req, res, next) {
    try {
      let todayDate = new Date().toISOString().slice(0, 10);
      req.body.fecha = todayDate;
      const user = await User.registerUser(req.body);
      res.redirect("/user/login");
      return user;
    } catch (error) {
      res.render("error");
      next(error);
    }
  },

  async allUsers(req, res, next) {
    try {
      const users = await User.getUsers();
      res.render("user/allUsers", { users, title: "All Users" });
    } catch (error) {
      next(error);
    }
  },

  async getUser(req, res, next) {
    try {
      const user = await User.getUserById(req.params.cedula);
      res.render("user/editUser", { title: "Update User", edit: user });
    } catch (error) {
      next(error);
    }
  },

  async editUser(req, res, next) {
    try {
      await User.editUser(req.body, req.params.cedula);
      res.redirect("/user/all");
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(req, res, next) {
    try {
      await User.dropUser(req.params.cedula);
      res.redirect("/user/all");
    } catch (error) {
      next(error);
    }
  },
};

module.exports = user;
