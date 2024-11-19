const express = require("express");
const userStoreController = require("../controllers/userstorepostController"); // Import your controller for userStore

const router = express.Router();

// Create a new UserStorePost
router.post("/", userStoreController.createUserStorePost);

// Get all UserStorePosts
router.get("/", userStoreController.getAllUserStorePosts);

// Get a single UserStorePost by ID
router.get("/:id", userStoreController.getUserStorePostById);

// Update a UserStorePost by ID
router.put("/:id", userStoreController.updateUserStorePost);

// Delete a UserStorePost by ID
router.delete("/:id", userStoreController.deleteUserStorePost);

module.exports = router;
