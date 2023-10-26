const express = require("express");

const router = express.Router();

const { createTweetController, getTweetControllerAll } = require("../controllers/tweetController");


router.post("/tweet", createTweetController);
router.get("/timeline", getTweetControllerAll);

module.exports = router;