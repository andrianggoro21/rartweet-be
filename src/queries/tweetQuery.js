const db = require("../models");
const dbTweet = db.tweets

const createTweetQuery = async (user_id, tweet) => {
    try {
        const res = await dbTweet.create({
            user_id,
            tweet,   
        })
        return res;
    } catch (err) {
        throw err;
    }
}

const getTweetQueryAll = async () => {
    try {
        const res = await dbTweet.findAll();
        return res;
    } catch (err) {
        throw err
    }
};

module.exports = {
    createTweetQuery,
    getTweetQueryAll,
}