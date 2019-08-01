/**
 * User Service Class
 * @author Amilton Brune
 */

const User = require("../models/usersModel");
const message = require("../../messages/message");

async function getAll() {
  return await User.find({});
}

async function getById(id) {
  const user = User.findById(id);

  if ((user = null)) throw message.user_not_found;

  return await user;
}

async function create(userParam) {
  if (await User.findOne({ mail: userParam.mail })) {
    throw await message.user_not_registered;
  }

  const user = new User(userParam);

  await user.save();
}

async function update(id, userParam) {
  const user = await User.findById(id);

  Object.assign(user, userParam);
  await user.save();
}

async function _delete(id) {
  const user = User.findById(id);

  if (!user) throw message.user_not_found;

  await User.findByIdAndRemove(id);
  return user;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  _delete
};
