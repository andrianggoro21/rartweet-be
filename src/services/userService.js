const { createUserQuery, findUserQuery, loginUserQuery } = require("../queries/userQuery");

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

const loginUserService = async (email, password) => {
    try {
        const check = await findUserQuery({email, password});
        if (!check) throw new Error("Email atau password salah");
        const res = await loginUserQuery(email, password)
        return res
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUserService,
    loginUserService,
}