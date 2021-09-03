const router = require("express").Router();
const controller = require("../controllers/index");
const user = require("../controllers/user");

router.get("/", controller.list);

module.exports = router;
