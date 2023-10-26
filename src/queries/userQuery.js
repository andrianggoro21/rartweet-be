const db = require("../models");
const dbUser = db.users;

const findUserQuery = async ({id = null, email = null, password = null}) => {
    try {
        const params = {};
        if (id) params.id = id;
        if (email) params.email = email;
        if (password) params.password = password;

        const res = await dbUser.findOne({
            where: {
                ...params,
            },
        });

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

const loginUserQuery = async ({email = null, password = null}) => {
    try {
        const params = {};
        // if (id) params.id = id;
        if (email) params.email = email;
        if (password) params.password = password;

        const res = await dbUser.findOne({
            where: {
                ...params,
                // password,
                
            },
        });

        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findUserQuery,
    createUserQuery,
    loginUserQuery,
}