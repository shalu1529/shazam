//routes/wishlistRoute.js
import express from "express";
import { getWishlist, addToWishlist, removeFromWishlist } from '../controllers/wishlistController.js';
//import { protect } from '../middleware/authMiddleware'; // Ensure users are authenticated

const wishlistRouter = express.Router();

wishlistRouter.get('/',  getWishlist); // Get wishlist
wishlistRouter.post('/create',  addToWishlist); // Add to wishlist
wishlistRouter.delete('/:songId', removeFromWishlist); // Remove from wishlist

 
export default wishlistRouter;
