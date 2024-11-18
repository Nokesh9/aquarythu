const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

// Define routes for stores
router.post("/stores", storeController.createStore); // Create a store
router.get("/stores", storeController.getAllStores); // Get all stores
router.get("/stores/:id", storeController.getStoreById); // Get a store by ID
router.put("/stores/:id", storeController.updateStore); // Update a store
router.delete("/stores/:id", storeController.deleteStore); // Delete a store

module.exports = router;
