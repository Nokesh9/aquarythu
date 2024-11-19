const UserOtpVerification = require("../models/otpVerification");


const UserOtpVerificationController = {
  // Create a new record
  create: async (req, res) => {
    try {
      const { verificationId, mobile_number, otp_verification } = req.body;
      const newRecord = await UserOtpVerification.create({
        verificationId,
        mobile_number,
        otp_verification,
      });
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update only otp_verification and created_at fields
  updateOtpVerification: async (req, res) => {
    try {
      const { id } = req.params;
      const { otp_verification, created_at } = req.body;

      const record = await UserOtpVerification.findByPk(id);
      if (!record) {
        return res.status(404).json({ message: "Record not found" });
      }

      // Allow updating only the specified fields
      await record.update({ otp_verification, created_at });
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserOtpVerificationController;
