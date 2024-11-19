const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

const StoreCategory = sequelize.define("StoreCategory", {
  storecategoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  StoreType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ImgUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = StoreCategory;
