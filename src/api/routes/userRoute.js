/**
 * User Route Class
 * @author Amilton Brune
 */

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");
const libraries = require("../../config/libraries");
const router = libraries.express.Router();

router.use(authMiddleware);
router
  .get("/users", userController.getAll)
  .post("/users", userController.register)
  .get("/users/:id", userController.getById)
  .put("/users/:id", userController.update)
  .delete("/users/:id", userController._delete);

module.exports = app => app.use("/api", router);
