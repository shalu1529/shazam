// src/hooks/useAuth.js
import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector((state) => state.auth.user); // Assuming you store user in auth slice

  // Check if the user is logged in
  return user !== null;
};
