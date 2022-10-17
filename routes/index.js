const express = require("express");
const router = express.Router();
const reflectionController = require("../controller");


router.post("/users/register", reflectionController.register);
router.post("/users/login", reflectionController.login);



module.exports = router;






























// router.delete("/reflections/:id", reflectionController.deleteUser);