const admin = require("firebase-admin");
const path = require("path");

// Resolve the path to your service account file
const serviceAccountPath = path.join(
  __dirname,
  "../aquarythu-12e0e-firebase-adminsdk-aubh5-6a0619f7ac.json"
);

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
  storageBucket: "downloaderhappy-56f3d.appspot.com", // Replace with your Firebase Storage bucket URL
});

// Export the bucket for use in other files
const bucket = admin.storage().bucket();
const auth = admin.auth();

module.exports = { bucket , auth };
