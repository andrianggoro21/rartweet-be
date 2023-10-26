const { createUserService } = require("../services/tweetService");

const createUserController = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const result = await createUserService(name, email, password);
        return res.status(200).json({
            message: "Success",
            data: result,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
};

module.exports = {
    createUserController,
}
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
