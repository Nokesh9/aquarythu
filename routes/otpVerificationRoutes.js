const express = require("express");
const UserOtpVerificationController = require("../controllers/otpverificationController");

const router = express.Router();

// Route for creating a new record
router.post("/", UserOtpVerificationController.create);

// Route for updating otp_verification and created_at
router.put("/:id", UserOtpVerificationController.updateOtpVerification);

module.exports = router;
