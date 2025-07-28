const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
  releaseYear: { type: Number },
  status: { type: String, enum: ['ongoing', 'completed'], default: 'ongoing' },
  episodes: [
    {
      episodeNumber: Number,
      title: String,
      videoUrl: String,
      duration: Number,
      releaseDate: Date
    }
  ],
  thumbnailUrl: String,
  posterUrl: String,
  viewCount: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
