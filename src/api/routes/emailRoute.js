module.exports = app => {
  const email = require("../controllers/emailController");

  app.route("/api/send-email").post(email.send_mail);
};
