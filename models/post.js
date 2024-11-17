const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");
const User = require("./user");
const Category = require("./category");
const Subcategory = require("./subcategory");

const Post = sequelize.define("Post", {
  postid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "UserId", // Assuming "id" is the primary key in the users table
    },
  },
  categoryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "categoryId",
    },
  },
  subcategoryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subcategory,
      key: "subcategoryId",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dist: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  village: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
});

// Relationships
User.hasMany(Post, { foreignKey: "userid", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "userid" });

Category.hasMany(Post, { foreignKey: "categoryid", onDelete: "CASCADE" });
Post.belongsTo(Category, { foreignKey: "categoryid" });

Subcategory.hasMany(Post, { foreignKey: "subcategoryid", onDelete: "CASCADE" });
Post.belongsTo(Subcategory, { foreignKey: "subcategoryid" });

module.exports = Post;
