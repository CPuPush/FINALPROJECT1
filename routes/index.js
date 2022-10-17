const express = require("express");
const router = express.Router();
const reflectionController = require("../controllers");

router.get("/", reflectionController);
// router.post("/", reflectionController);
// router.put("/", reflectionController);
// router.delete("/", reflectionController);

module.exports = router;
