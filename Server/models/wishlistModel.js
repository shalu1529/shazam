//models/wishlistModel.js
import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  albumName: String,
  artistName: String,
  duration: Number,
  genre: [String],  // Array of genres
  songId: String,   // Unique identifier for the song
});


const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  songs: [songSchema],
});

export const Wishlist = mongoose.model('Wishlist', wishlistSchema);
