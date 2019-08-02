/**
 * User Controller Class
 * @author Amilton Brune
 */

const userService = require("../services/userService");
const message = require("../../messages/message");

exports.getAll = (req, res) => {
  userService
    .getAll()
    .then(users => res.json(users))
    .catch(() => {
      res.status(400).send(message.user_error);
    });
};

exports.getById = (req, res) => {
  userService
    .getById(req.params.id)
    .then(user => res.json(user))
    .catch(() => {
      res.status(404).send(message.user_not_found);
    });
};

exports.register = (req, res) => {
  userService
    .create(req.body)
    .then(() => res.json(message.user_registered))
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.update = (req, res) => {
  userService
    .update(req.params.id, req.body)
    .then(() => res.send(message.user_update))
    .catch(() => {
      res.status(404).send(message.user_not_found);
    });
};

exports._delete = (req, res) => {
  userService
    ._delete(req.params.id)
    .then(() => res.send(message.user_delete))
    .catch(() => {
      res.status(404).send(message.user_not_found);
    });
};
