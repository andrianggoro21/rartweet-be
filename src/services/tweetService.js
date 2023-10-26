const { createUserQuery, findUserQuery } = require("../queries/tweetQuery");

const createUserService = async (name, email, password) => {
    try {
        const check = await findUserQuery({email});
        if (check) throw new Error("Email already exist");
        const res = await createUserQuery(name, email, password);
        
        return res; 
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUserService,
}
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
