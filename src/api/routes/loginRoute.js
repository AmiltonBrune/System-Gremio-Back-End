/**
 * Login Route Class
 * @author Amilton Brune
 */

const loginConroller = require("../controllers/loginController");
const libraries = require("../../config/libraries");
const router = libraries.express.Router();

router.post("/register", loginConroller.register);
router.post("/sign", loginConroller.sign);

module.exports = app => app.use("/api", router);
