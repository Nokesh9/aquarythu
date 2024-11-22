// const path = require('path');
// const fs = require('fs');
// const { bucket } = require('../utils/bucket');

// const uploadFile = async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const file = req.file;

//     if (!file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }
//     // Upload the file to Firebase Storage
//     const filePath = path.join(__dirname, '../uploads', file.filename);
//     const destination = `uploads/${file.originalname}`;

//     await bucket.upload(filePath, {
//       destination,
//       metadata: {
//         contentType: file.mimetype,
//       },
//     });

//     // Delete the local file after uploading
//     fs.unlinkSync(filePath);

//     // Get the file's public URL
//     const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;

//     res.status(200).json({ message: 'File uploaded successfully', publicUrl });
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     res.status(500).json({ message: 'Error uploading file', error });
//   }
// };

// module.exports = { uploadFile };
const path = require('path');
const fs = require('fs');
const { bucket } = require('../utils/bucket');

const uploadFile = async (req, res) => {
  try {
    const { name, email } = req.body;
    var file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Define the file path and destination in Firebase Storage
    const filePath = path.join(__dirname, '../uploads', file.filename);
    const destination = `uploads/${file.originalname}`;

    // Upload the file to Firebase Storage
    const [uploadedFile] = await bucket.upload(filePath, {
      destination,
      metadata: {
        contentType: file.mimetype,
      },
    });

    // Make the file publicly accessible
    await uploadedFile.makePublic();

    // Get the permanent public URL
    const publicUrl = uploadedFile.publicUrl();

    // Delete the local file after uploading
    fs.unlinkSync(filePath);

    res.status(200).json({ message: 'File uploaded successfully', publicUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Error uploading file', error });
  }
};

module.exports = { uploadFile };