const { Sequelize } = require("sequelize");

// Configure Sequelize instance
const sequelize = new Sequelize("aquarythu", "root", "Nani@4043", {
  host: "localhost",
  dialect: "mysql",
});

// Test the connection
// sequelize
//   .authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch((err) => console.error("Error connecting to DB:", err));

(async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  })();

module.exports = sequelize;
