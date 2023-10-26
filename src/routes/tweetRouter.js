const express = require("express");
const router = express.Router();

const {
  createUserController,
  loginUserController,
} = require("../controllers/userController");

router.get("/login", loginUserController);
router.post("/register", createUserController);

module.exports = router;