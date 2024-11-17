const Subcategory = require("../models/subcategory");

module.exports = {
  createSubcategory: async (req, res) => {
    try {
      const { categoryId, subcategory_name, subcategory_image, subcategory_description } = req.body;
      const newSubcategory = await Subcategory.create({
        categoryId,
        subcategory_name,
        subcategory_image,
        subcategory_description,
      });
      res.status(201).json(newSubcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllSubcategories: async (req, res) => {
    try {
      const subcategories = await Subcategory.findAll();
      res.status(200).json(subcategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateSubcategory: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const subcategory = await Subcategory.findByPk(id);
      if (!subcategory) {
        return res.status(404).json({ message: "Subcategory not found." });
      }

      await subcategory.update(updatedData);
      res.status(200).json(subcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteSubcategory: async (req, res) => {
    try {
      const { id } = req.params;

      const subcategory = await Subcategory.findByPk(id);
      if (!subcategory) {
        return res.status(404).json({ message: "Subcategory not found." });
      }

      await subcategory.destroy();
      res.status(200).json({ message: "Subcategory deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
