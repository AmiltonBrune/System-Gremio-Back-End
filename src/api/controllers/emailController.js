/**
 * Email Controller Class
 * @author Amilton Brune
 */

const fs = require("fs");
const ejs = require("ejs");
const sendGridController = require("./sendGridController");

exports.send_mail = async (req, res) => {
  await renderAndSaveHtml(
    "Seja Bem Vindo",
    "Olá Usuario, seja bem vindo ao nosso sistema"
  );
  await sendMail(
    `${req.body.email}`,
    `Esse é apenas um teste`,
    fs.readFileSync("src/emails/html/newUser.html", "utf-8"),
    res
  );
};

const renderAndSaveHtml = async (title, name) => {
  const html = await ejs.renderFile("src/emails/newUser.ejs", {
    title: title,
    name: name
  });
  fs.writeFileSync("src/emails/html/newUser.html", html);
};

const sendMail = (to, subject, html, res) => {
  let msg = {
    to: to,
    from: "novousuario@portal.com.br",
    subject: subject,
    html: html
  };

  sendGridController.sendMail(msg, err => {
    if (err) {
      console.error(err.toString());
      return res.status(400).send({
        error: "Não foi possível enviar o email"
      });
    }
    return res.send({
      message: "Email enviado com sucesso!!!"
    });
  });
};
