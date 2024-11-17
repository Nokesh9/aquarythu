const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");
const Category = require("./category");

const Subcategory = sequelize.define("Subcategory", {
  subcategoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "categoryId",
    },
  },
  subcategory_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subcategory_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subcategory_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: false,
});

// Define relationships
Category.hasMany(Subcategory, { foreignKey: "categoryId", onDelete: "CASCADE" });
Subcategory.belongsTo(Category, { foreignKey: "categoryId" });

module.exports = Subcategory;
