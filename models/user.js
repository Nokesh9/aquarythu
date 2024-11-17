const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

// Define the User model
const User = sequelize.define("User", {
  UserId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Occupation: {
    type: DataTypes.STRING,
  },
  Role: {
    type: DataTypes.STRING,
  },
  Longitude: {
    type: DataTypes.FLOAT,
  },
  Latitude: {
    type: DataTypes.FLOAT,
  },
  Village: {
    type: DataTypes.STRING,
  },
  State: {
    type: DataTypes.STRING,
  },
  District: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
