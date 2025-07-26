require('dotenv').config();

module.exports = {
  dbUrlMongoDB: process.env.DB_URL,
  port: process.env.PORT,
};
