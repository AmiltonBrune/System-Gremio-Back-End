/**
 * User Service Class
 * @author Amilton Brune
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/usersModel");

const getAll = async () => {
  return await User.find({});
};

module.exports = {
  getAll
};
