// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./authSlice"; // Import the authReducer

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    auth: authReducer, // Add authReducer here
  },
});