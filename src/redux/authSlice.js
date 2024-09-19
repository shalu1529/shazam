// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Save the logged-in user
    },
    logout: (state) => {
      state.user = null; // Remove user on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
