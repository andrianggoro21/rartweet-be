const express = require("express");

const router = express.Router();

const { createTweetController, getTweetControllerAll } = require("../controllers/tweetController");
const { createUserController, findUserControllerAll, loginUserController } = require("../controllers/userController");

router.post("/new-tweet", createTweetController);
router.get("/timeline", getTweetControllerAll);
router.post("/register", createUserController);
router.get("/", findUserControllerAll);
router.get("/login", loginUserController)

module.exports = router;;