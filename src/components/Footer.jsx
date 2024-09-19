import React from "react";
import shazamBlack from "../assets/logo.svg";
import appStore from "../assets/appStore.png";
import chromeStore from "../assets/chromeStore.png";
import galaxyStore from "../assets/galaxystore.webp";
import androidStore from "../assets/googleplay.png";
import facebook from "../assets/facebook.png";
import x from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black text-white py-16 px-10">
      {/* Main Footer Container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Shazam Logo and App Links */}
        <div className="mb-8 md:mb-0">
          <h1 className="flex items-center">
            <img src={shazamBlack} className="w-12 h-12" alt="Shazam" />
            <span className="ml-2 text-2xl font-semibold">SHAZAM</span>
          </h1>
          
          <div className="grid gap-4 pt-8" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <img
              src={androidStore}
              className="h-[46px] rounded-lg shadow-lg border border-white"
              alt="Google Play"
            />
            <img src={appStore} className="h-[46px] shadow-lg" alt="App Store" />
            <img
              src={chromeStore}
              className="h-[46px] rounded-lg shadow-lg border border-white"
              alt="Chrome Web Store"
            />
            <img src={galaxyStore} className="h-[46px] shadow-lg" alt="Galaxy Store" />
          </div>
        </div>

        {/* Company and Legal Links */}
        <div className="grid grid-cols-2 gap-12">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:underline">About Us</Link></li>
              <li><Link to="#" className="hover:underline">Apps</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Help for Apple Devices</Link></li>
              <li><Link to="#" className="hover:underline">Help for Android Devices</Link></li>
              <li><Link to="#" className="hover:underline">ShazamKit for Developers</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:underline">Terms</Link></li>
              <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline">Manage Your Data</Link></li>
              <li><Link to="#" className="hover:underline">My Library</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="text-center mt-12">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <Link to="https://www.facebook.com/Shazam" target="_blank">
            <img src={facebook} alt="Facebook" className="w-8 h-8" />
          </Link>
          <Link to="https://x.com/shazam" target="_blank">
            <img src={x} alt="Twitter" className="w-8 h-8" />
          </Link>
          <Link to="https://www.instagram.com/shazam/" target="_blank">
            <img src={instagram} alt="Instagram" className="w-8 h-8" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-8">
        <p>
          © Copyright 2024 Apple Inc. and its affiliates |
          <Link to="#" className="underline ml-2">Supplier Responsibility</Link>
        </p>
      </div>
    </div>
  );
}
