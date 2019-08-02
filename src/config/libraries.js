const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const libraries = {
  express,
  bodyParser,
  bcrypt,
  jwt
};

module.exports = libraries;
