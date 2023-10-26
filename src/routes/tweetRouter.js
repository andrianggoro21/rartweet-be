const express = require("express");
const router = express.Router();

const {
  createUserController,
} = require("../controllers/tweetController");

router.post("/", createUserController);

module.exports = router;