//controles/wishlistController.js
import {Wishlist} from '../models/wishlistModel.js';

// Get user's wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.user.id });
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a song to the wishlist
const addToWishlist = async (req, res) => {
  const { songId, songName, artistName, artwork } = req.body;
  try {
    let wishlist = await Wishlist.findOne({ userId: req.user.id });
    if (!wishlist) {
      wishlist = new Wishlist({ userId: req.user.id, songs: [] });
    }
    const song = { songId, songName, artistName, artwork };
    wishlist.songs.push(song);
    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a song from the wishlist
const removeFromWishlist = async (req, res) => {
  const { songId } = req.params;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userId: req.user._id },
      { $pull: { songs: { songId } } },
      { new: true }
    );
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {addToWishlist,removeFromWishlist,getWishlist} ;
