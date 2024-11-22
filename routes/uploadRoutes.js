const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controllers/uploadController');

const router = express.Router();

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files are temporarily stored here

// Define the upload route
router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
