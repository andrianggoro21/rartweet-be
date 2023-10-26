const express = require("express");

const router = express.Router();

const { createTweetController, getTweetControllerAll } = require("../controllers/tweetController");
const { createUserController, findUserControllerAll } = require("../controllers/userController");

router.post("/tweet", createTweetController);
router.get("/timeline", getTweetControllerAll);
router.post("/", createUserController);
router.get("/", findUserControllerAll);

module.exports = router;;