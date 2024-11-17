const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

const UserOtpVerification = sequelize.define("UserOtpVerification", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  verificationId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp_verification: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

module.exports = UserOtpVerification;
