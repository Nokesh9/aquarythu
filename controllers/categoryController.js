const Category = require("../models/category");

module.exports = {
  createCategory: async (req, res) => {
    try {
      const { category_name, category_image, category_description } = req.body;
      const newCategory = await Category.create({
        category_name,
        category_image,
        category_description,
      });
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }

      await category.update(updatedData);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }

      await category.destroy();
      res.status(200).json({ message: "Category deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
