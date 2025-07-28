const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  episodeNumber: Number,
  lastWatchedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('History', historySchema);
