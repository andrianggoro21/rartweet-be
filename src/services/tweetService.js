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