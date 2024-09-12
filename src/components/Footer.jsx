// import shazamBlack from "../assets/shazamBlack.svg";
// import appStore from "../assets/appStore.png";
// import chromeStore from "../assets/chromeStore.png";
// import galaxyStore from "../assets/galaxystore.webp";
// import androidStore from "../assets/googleplay.png";
// import facebook from "../assets/facebook.png";
// import x from "../assets/twitter.png";
// import instagram from "../assets/instagram.png";
// import { Link } from "react-router-dom";
// export default function Footer() {
//   return (
//     <div
//       className=" flex py-32 px-28 flex-wrap justify-center gap-x-12 bg-black"
      
//     >
//       <div className="flex flex-col " style={{ flexGrow: 2 }}>
//         <h1 className="">
//           <img src={shazamBlack} className="w-[50px] inline pb-2" alt="" />
//           <span
//             className="ml-1 text-white text-[24px]"
            
//           >
//             Shazam
//           </span>
//         </h1>
//         <div
//           className="grid gap-4 pt-8"
//           style={{
//             gridTemplateColumns: "150px 150px",
//             gridTemplateRows: "60px 60px",
//           }}
//         >
//           <img
//             src={androidStore}
//             className="h-[46px] rounded-lg  shadow-xl "
//             alt=""
//             style={{ border: "1px solid gray" }}
//           />
//           <img src={appStore} className="h-[47px] shadow-xl" alt="" />
//           <img
//             src={chromeStore}
//             className="h-[44px]  rounded-lg shadow-xl"
//             alt=""
//             style={{ border: "1px solid white" }}
//           />
//           <img src={galaxyStore} className="h-[45px] shadow-xl" alt="" />
//         </div>
//       </div>
//       <div
//         className="grid gap-4 "
//         style={{
//           gridTemplateColumns: "160px 160px",
//           flexGrow: "2",
//         }}
//       >
//         <div className="">
//           <ul
//             className=" text-[16px] text-[#000000cc]"
//             style={{ fontFamily: "MyFont" }}
//           >
//             <li
//               className=" mb-3  opacity-100 font-bold text-white text-[22px]"
//               style={{ fontFamily: "MyFont" }}
//             >
//               Company
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               About Us
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">Apps</li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               Careers
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               Help for Apple Devices
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               Help for Android Devices
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               ShazamKit for Developers
//             </li>
//           </ul>
//         </div>
//         <div>
//           {" "}
//           <ul
//             className=" text-[16px] text-[#000000cc]"
//             style={{ fontFamily: "MyFont" }}
//           >
//             <li
//               className=" mb-3  opacity-100 font-bold text-black text-[22px]"
//               style={{ fontFamily: "MyFont" }}
//             >
//               Legal
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">Terms</li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               Privacy Policy
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               Manage Your Data
//             </li>
//             <li className=" cursor-pointer hover:bg-white rounded-md">
//               My Library
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div
//         className=" text-[20px] text-[#000000cc] mt-8 flex flex-col"
//         style={{ fontFamily: "MyFont", flexGrow: 0 }}
//       >
//         <h1 className="text-center">Follow Us</h1>
//         <div className="flex gap-2 self-center">
//           <Link to={"https://www.facebook.com/Shazam"} target="blank">
//             <img src={facebook} alt="" />
//           </Link>
//           <Link to={"https://x.com/shazam"} target="blank">
//             <img src={x} alt="" />
//           </Link>
//           <Link to={"https://www.instagram.com/shazam/"} target="blank">
//             <img src={instagram} alt="" />
//           </Link>
//         </div>
//         <h1 className=" text-[16px] mt-3 text-center">
//           © Copyright 2024 Apple Inc. and its affiliates |{" "}
//           <span className=" underline ml-2">Supplier Responsibility</span>
//         </h1>
//       </div>
//     </div>
//   );
// }


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
