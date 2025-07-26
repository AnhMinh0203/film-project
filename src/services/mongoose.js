const mongoose = require('mongoose');
const config = require('../config/config');

const dbUrl = config.dbUrlMongoDB;

(async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
})();

module.exports = mongoose;
