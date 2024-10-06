import { Wishlist } from '../models/wishlistModel.js';

// Get user's wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.user.id }); // Access req.user.id here
    if (!wishlist) {
      return res.status(404).json({ message: 'No wishlist found for this user' });
    }

    res.status(200).json(wishlist); // Return the wishlist
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a song to the wishlist
const addToWishlist = async (req, res) => {
  const { albumName } = req.body;
  try {
    let wishlist = await Wishlist.findOne({ userId: req.user.id }); // Access req.user.id here
    if (!wishlist) {
      wishlist = new Wishlist({ userId: req.user.id, songs: [] });
    }
    const song = { albumName };
    wishlist.songs.push(song);
    await wishlist.save();

    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a song from the wishlist
// const removeFromWishlist = async (req, res) => {
//   const { songId } = req.params;
//   console.log("Request user ID:", req.user); // Debug log to check req.user

//   if (!req.user || !req.user.id) {
//     return res.status(400).json({ message: 'User not found in request' });
//   }

//   try {
//     const wishlist = await Wishlist.findOneAndUpdate(
//       { userId: req.user.id }, // Access req.user.id
//       { $pull: { songs: { songId } } }, // Remove song from songs array
//       { new: true }
//     );

//     if (!wishlist) {
//       return res.status(404).json({ message: 'Wishlist not found' });
//     }

//     res.status(200).json(wishlist);
//   } catch (error) {
//     console.error("Error in removing song from wishlist:", error);
//     res.status(500).json({ message: error.message });
//   }
// };
const removeFromWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const wishlist = await Wishlist.findByIdAndDelete(id);
    return res.status(200).send({ message: "Wishlist deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting wishlist", error: error.message });
  }
};


export { addToWishlist, removeFromWishlist, getWishlist };
