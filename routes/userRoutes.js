const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

// Define routes
router.get("/", UserController.getAllUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
