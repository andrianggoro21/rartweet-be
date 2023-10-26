const {
  createTweetService,
  getTweetServiceAll,
} = require("../services/tweetService");

const createTweetController = async (req, res) => {
  try {
    const { user_id, tweet } = req.body;
    const result = await createTweetService(user_id, tweet);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const getTweetControllerAll = async (req, res) => {
  try {
    const result = await getTweetServiceAll();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createTweetController,
  getTweetControllerAll,
};
