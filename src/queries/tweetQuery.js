const db = require("../models");
const dbUser = db.users;

const findUserQuery = async ({id = null, email = null}) => {
    try {
        const params = {};
        if (id) params.id = id;
        if (email) params.email = email;

        const res = await dbUser.findOne({
            where: {
                ...params,
            },
        });

const dbTweet = db.tweets

const createTweetQuery = async (user_id, tweet) => {
    try {
        const res = await dbTweet.create({
            user_id,
            tweet,
            // date_tweet: new Date()
               
        })
        return res;
    } catch (err) {
        throw err;
    }
}

const createUserQuery = async (name, email, password) => {
    try {
        // const t = await db.sequelize.transaction();
        const res = await dbUser.create({
            name,
            email,
            password,
        },
            // {transaction: t}
            );
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findUserQuery,
    createUserQuery,
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