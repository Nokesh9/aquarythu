const express = require("express");
const router = express.Router();
const storeCategoryController = require("../controllers/storecategoryController");

// Create a new Store Category
router.post("/categories", storeCategoryController.createStoreCategory);

// Get all Store Categories
router.get("/categories", storeCategoryController.getStoreCategories);

// Get a single Store Category by ID
router.get("/categories/:id", storeCategoryController.getStoreCategoryById);

// Update a Store Category
router.put("/categories/:id", storeCategoryController.updateStoreCategory);

// Delete a Store Category
router.delete("/categories/:id", storeCategoryController.deleteStoreCategory);

module.exports = router;
