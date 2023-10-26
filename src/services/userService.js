const { createUserQuery, findUserQuery, findUserQueryAll } = require("../queries/userQuery");

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

const findUserServiceAll = async () => {
    try {
        const res = await findUserQueryAll()
        return res;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUserService,
    findUserServiceAll
}