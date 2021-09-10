const User = require("../model/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const sendJwtToClient = require("../helpers/authorization/tokenHelpers");

const register = asyncErrorWrapper(async (request, response, next) => {
  const { name, email, password, role } = request.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendJwtToClient(user, response);
});

const tokentest = (req, res, next) => {
  res.json({
    success: true,
    message: "Welcome",
  });
};

module.exports = {
  register,
  tokentest,
};
