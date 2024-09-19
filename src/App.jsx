
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Radio from "./components/Radio";
import GettheApp from "./components/GettheApp";
import Chart from "./components/Chart";
import SingleSong from "./components/SingleSong";
import FixedLogo from "./components/FixedLogo";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import { auth } from "./firebase"; // Import Firebase auth instance
import { login, logout } from "./redux/authSlice"; // Redux actions

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Listen for authentication changes and update Redux
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user)); // Dispatch login action with Firebase user
      } else {
        dispatch(logout()); // Dispatch logout action if no user
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [dispatch]);

  return (
    <>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-app" element={<GettheApp />} />
        <Route path="/song/:songId" element={<SingleSong />} />
        <Route path="/charts" element={<Chart />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <FixedLogo />
    </>
  );
}

function ConditionalNavbar() {
  const location = useLocation();

  // Define the paths where the Navbar should not be displayed
  const noNavbarPaths = ["/signup", "/login", "/wishlist"];

  // Check if the current path is in the noNavbarPaths array
  const showNavbar = !noNavbarPaths.includes(location.pathname);

  return showNavbar ? <Navbar /> : null;
}

export default App;
