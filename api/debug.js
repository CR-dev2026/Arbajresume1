module.exports = async (req, res) => {
  res.json({
    projectId: process.env.FIREBASE_PROJECT_ID || 'NOT SET',
    email: process.env.FIREBASE_CLIENT_EMAIL || 'NOT SET',
    keyLength: process.env.FIREBASE_PRIVATE_KEY ? 
      process.env.FIREBASE_PRIVATE_KEY.length : 0,
    keyStart: process.env.FIREBASE_PRIVATE_KEY ? 
      process.env.FIREBASE_PRIVATE_KEY.substring(0, 30) : 'NOT SET',
  });
};
