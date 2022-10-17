const express = require("express");
const router = express.Router();
const reflectionController = require("../controller");

router.get("/reflections", reflectionController.getUsers);
router.post("/users/register", reflectionController.register);
// router.post("/api/v1/users/login", reflectionController);
// router.post("/api/v1/reflections", reflectionController);
// router.put("/api/v1/reflections/:id", reflectionController);
router.delete("/reflections/:id", reflectionController.deleteUser);
// router.delete("/", reflectionController);

module.exports = router;
