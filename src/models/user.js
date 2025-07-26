const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // sẽ hash sau này
  email: { type: String, required: true, unique: true },
  dob: { type: Date },
  gender: { type: String, enum: ['male', 'female', 'other'] }, // chỉ chấp nhận các giá trị này
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
