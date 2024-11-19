const StoreCategory = require("../models/storecategory");

// Create a new Store Category
exports.createStoreCategory = async (req, res) => {
  try {
    const { StoreType, Description, ImgUrl } = req.body;
    const newCategory = await StoreCategory.create({ StoreType, Description, ImgUrl });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Store Categories
exports.getStoreCategories = async (req, res) => {
  try {
    const categories = await StoreCategory.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Store Category by ID
exports.getStoreCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await StoreCategory.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Store Category
exports.updateStoreCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { StoreType, Description, ImgUrl } = req.body;

    const category = await StoreCategory.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.update({ StoreType, Description, ImgUrl });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Store Category
exports.deleteStoreCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await StoreCategory.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.destroy();
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
