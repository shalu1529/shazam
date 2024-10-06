//routes/wishlistRoute.js
import express from "express";
import { getWishlist, addToWishlist, removeFromWishlist } from '../controllers/wishlistController.js';
import { authentication } from "../middllewares/userMiddleware.js";

const wishlistRouter = express.Router();

wishlistRouter.get('/details', authentication, getWishlist); // Get wishlist
wishlistRouter.post('/create', authentication, addToWishlist); // Add to wishlist
wishlistRouter.delete('/:id', removeFromWishlist); // Remove from wishlist

 
export default wishlistRouter;
