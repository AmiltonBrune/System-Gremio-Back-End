/**
 * User Route Class
 * @author Amilton Brune
 */

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");
const libraries = require("../../config/libraries");
const router = libraries.express.Router();

router.use(authMiddleware);
<<<<<<< HEAD
router
  .get("/users", userController.getAll)
  .post("/users", userController.register)
  .get("/users/:id", userController.getById)
  .put("/users/:id", userController.update)
  .delete("/users/:id", userController._delete);
=======
router.get("/users", userController.getAll);
router.get("/users/:id", userController.getById);
router.post("/users", userController.register);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController._delete);
>>>>>>> 367fc172658e7be12742aada8b43d4fd868bf374

module.exports = app => app.use("/api", router);
