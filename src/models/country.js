const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true }, // Ví dụ: VN, US
}, { timestamps: true });

module.exports = mongoose.model('Country', countrySchema);
