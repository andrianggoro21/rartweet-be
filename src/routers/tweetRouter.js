const express = require("express");

const router = express.Router();

const { createTweetController, getTweetControllerAll } = require("../controllers/tweetController");
const { createUserController } = require("../controllers/userController");

router.post("/tweet", createTweetController);
router.get("/timeline", getTweetControllerAll);
router.post("/", createUserController);

module.exports = router;;