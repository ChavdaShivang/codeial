const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home_controller");


router.get("/", homeController.home);
router.get("/about", homeController.about);
router.use("/user", require("./users"));
router.use("/post", require("./posts"));

module.exports = router;