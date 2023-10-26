const { createTweetQuery, getTweetQueryAll } = require("../queries/tweetQuery");


const createTweetService = async (user_id, tweet) => {
  try {
    const res = await createTweetQuery(user_id, tweet);
    return res;
  } catch (err) {
    throw err;
  }
};

const getTweetServiceAll = async () => {
  try {
    const res = await getTweetQueryAll();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTweetService,
  getTweetServiceAll,
};
