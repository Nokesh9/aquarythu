const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

const Category = sequelize.define("Category", {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = Category;
