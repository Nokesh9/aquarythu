const User = require("../models/user");

const UserController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a user
  updateUser: async (req, res) => {
    try {
      const result = await User.update(req.body, { where: { UserId: req.params.id } });
      if (result[0] > 0) {
        res.status(200).json({ message: "User updated successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    try {
      const result = await User.destroy({ where: { UserId: req.params.id } });
      if (result) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
