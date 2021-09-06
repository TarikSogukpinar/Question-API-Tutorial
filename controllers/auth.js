const User = require('../model/User');

const register = async (request, response, next) => {
    //POST DATA
    const name = "Ledun Ledun"
    const email = "Ledun@ledun.com"
    const password = "12345";

    const user = await User.create({
        name,
        email,
        password,
    });

    response.status(200)
    response.json({
        success: true,
        data: user
    });
};

module.exports = {
    register
};