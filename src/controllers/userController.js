const { createUserService } = require("../services/userService");

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