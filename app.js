const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/dbconfig");
// const User = require("./models/user");
const userRoutes = require("./routes/userRoutes");
const userOtpVerificationRoutes = require("./routes/otpVerificationRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subcategoryRoutes = require("./routes/subcategoryRoutes");
const postRoutes = require("./routes/postRoutes")
const storecategoryRoutes = require("./routes/storecategoryRoutes");
const userStorePostRoutes = require("./routes/userstorepostRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/user-otp-verification", userOtpVerificationRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/storecategories", storecategoryRoutes);
app.use("/api/userstore", userStorePostRoutes);


// Sync database and start the server
sequelize.sync({ alter: true }) // force: true will drop tables first
  .then(() => {
    console.log("Database & tables created!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("Error syncing database:", err));
