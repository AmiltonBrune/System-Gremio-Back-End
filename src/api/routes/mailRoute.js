/**
 * Mail Route Class
 * @author Amilton Brune
 */
const mail = require("../controllers/emailController");
const libraries = require("../../config/libraries");
const router = libraries.express.Router();

router.post("/send-email", mail.send_mail);

module.exports = app => app.use("/api", router);
