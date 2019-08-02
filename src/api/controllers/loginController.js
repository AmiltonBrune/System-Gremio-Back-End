/**
 * Login Controller Class
 * @author Amilton Brune
 */

const loginService = require("../services/loginService");

exports.register = (req, res) => {
  loginService
    .register(req.body)
    .then(login => res.send(login))
    .catch(err => res.status(400).send(err));
};

exports.sign = (req, res) => {
  loginService
    .sign(req.body)
    .then(login => res.send(login))
    .catch(err => res.status(400).send(err));
};
