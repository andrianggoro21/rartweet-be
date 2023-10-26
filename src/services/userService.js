// const db = require("../models");
// const dbUser = db.users;

const {
  createUserQuery,
  findUserQuery,
  findUserQueryAll,
  loginUserQuery,
} = require("../queries/userQuery");

const createUserService = async (name, email, password) => {
  try {
    const check = await findUserQuery({ email });
    if (check) throw new Error("Email already exist");
    const res = await createUserQuery(name, email, password);

    return res;
  } catch (err) {
    throw err;
  }
};

const findUserServiceAll = async () => {
  try {
    const res = await findUserQueryAll();
    return res;
  } catch (err) {
    throw err;
  }
};

const loginUserService = async (email, password) => {
  try {
    const check = await findUserQuery({ email, password });
    console.log(check.dataValues.email);
    if (check.dataValues.email.length === 0)
      throw new Error("Email atau password salah");
    if (
      check.dataValues.email != email ||
      check.dataValues.password != password
    ) {
      throw new Error("Email atau password salah");
    } else {
      const res = await loginUserQuery(email, password);
      // console.log(res);
      return res;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUserService,
  findUserServiceAll,
  loginUserService,
};
