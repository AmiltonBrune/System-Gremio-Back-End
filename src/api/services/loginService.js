/**
 * Login Service Class
 * @author Amilton Brune
 */

const libraries = require("../../config/libraries");
const message = require("../../messages/message");
const User = require("../models/usersModel");

require("dotenv").config();

async function register(loginParam) {
  if (await User.findOne({ mail: loginParam.mail })) {
    throw await message.user_not_registered;
  }

  const user = new User(loginParam);

  await user.save();
  return message.user_registered;
}

async function sign(loginParam) {
  const user = await User.findOne({ mail: loginParam.mail }).select(
    "+password"
  );

  if (!user) {
    throw await message.user_not_found;
  }

  if (!(await libraries.bcrypt.compare(loginParam.password, user.password))) {
    throw await message.user_invalid_password;
  }

  user.password = undefined;

  return { token: generateToken({ id: user.id }) };
}

function generateToken(params = {}) {
  return libraries.jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400
  });
}
module.exports = {
  register,
  sign
};
