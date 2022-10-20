const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const reflectionController = require('../controller/reflectionController');
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.post("/users/register", userController.register);
router.post("/users/login", userController.login);

router.get("/reflections", authentication, reflectionController.getAllReflection);
router.get("/reflections/:id", authentication, authorization, reflectionController.getReflectionById);
router.post("/reflections", authentication, reflectionController.createReflection);
router.put("/reflections/:id", authentication, authorization, reflectionController.editReflectionById);
router.delete("/reflections/:id", authentication, authorization, reflectionController.deleteReflectionById);

module.exports = router;




























// router.delete("/reflections/:id", reflectionController.deleteUser);