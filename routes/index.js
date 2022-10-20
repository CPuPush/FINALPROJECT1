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

// testsetsteste

module.exports = router;



// {
//   "id": 1,
//   "success": "test",
//   "low_point": "test",
//   "take_away": "test",
//   "owner_id": 9,
//   "created_date": "2010-10-09T17:00:00.000Z",
//   "modified_date": "2010-10-09T17:00:00.000Z"
// }


























// router.delete("/reflections/:id", reflectionController.deleteUser);