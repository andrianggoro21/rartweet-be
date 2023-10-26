const express = require("express");
const router = express.Router();

const {
  createUserController,
} = require("../controllers/userController");

router.post("/", createUserController);

module.exports = router;