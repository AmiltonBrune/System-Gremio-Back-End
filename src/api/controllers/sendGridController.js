/**
 * SendGrid Controller Class
 * @author Amilton Brune
 */

const sgMail = require("@sendgrid/mail");

require("dotenv").config();

module.exports = {
  sendMail: (msg, callback) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail
      .send(msg)
      .then(() => {
        if (typeof callback === "function") {
          return callback(null);
        }
      })
      .catch(error => {
        console.error(error.toString());

        const { message, code, response } = error;

        const { headers, body } = response;

        console.log(message, code, response, headers, body);

        return callback(error);
      });
  }
};
