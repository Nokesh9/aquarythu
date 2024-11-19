const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");
const User = require("./user");
const StoreCategory = require("./storecategory");
// const { post } = require("../routes/userstorepostRoutes");

const UserStorePost = sequelize.define("UserStorePost", {
  storeId: {
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
  storecategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: StoreCategory,
      key: "storecategoryId",
    },
  },
  store_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  storeImg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  StoreDiscrption: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  StoreContact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  storeState: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  storeDistrict: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  storevillage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
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
}, {
  timestamps: false, // Disable timestamps if not required
});




// Define associations
User.hasMany(UserStorePost, { foreignKey: "userid", onDelete: "CASCADE" });  //one to maney
UserStorePost.belongsTo(User, { foreignKey: "userid" }); // user

StoreCategory.hasMany(UserStorePost, { foreignKey: "storecategoryId", onDelete:"CASCADE"});
UserStorePost.belongsTo(StoreCategory, { foreignKey: "storecategoryId" });

module.exports = UserStorePost;
