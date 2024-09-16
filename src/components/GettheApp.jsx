import React from "react";
import img1 from "../assets/phnimages.webp";
import img2 from "../assets/qrshazam.webp";
import { GoArrowUpRight } from "react-icons/go";
import img3 from "../assets/chrome-logo.webp";
import img4 from "../assets/billie.webp";
import img5 from "../assets/sth.webp";
import img6 from "../assets/phn1.webp";
import img7 from "../assets/shazam.png";
import img8 from "../assets/phn2.webp";
import img9 from "../assets/phn3.webp";
import img10 from "../assets/snapchat-logo.webp";
import img11 from "../assets/watches.webp";
import Footer from "./Footer";

const GettheApp = () => {
  return (
    <>
      <div className="bg-[#F8F8F8]">
        <img src={img1} alt="bg-img" className="w-[90%] pl-40 pt-28"  />
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mt-10 mx-auto">
            Identify, listen and discover <br></br> songs with the Shazam app
          </h1>
          <p className="text-gray-500 font-normal text-lg md:text-xl mt-4">
            Listen and add songs you discover to your Apple Music or Spotify playlists.<br></br> Sing along with time-synced lyrics. Watch your favorite music videos with<br></br> Apple Music or YouTube.
          </p>
        </div>

        <div className="bg-white w-[90%] md:w-[40%] mx-auto mt-6 rounded-md flex flex-col md:flex-row p-4">
          <img src={img2} alt="qr" className="w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 mt-4 md:mt-0" />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 text-center md:text-left">
            <h2 className="font-bold text-lg md:text-xl mx-auto">Download the free App</h2>
            <p className="text-gray-500 font-normal">
              Scan the code with your smartphone camera to download the free app
            </p>
            <p className="mt-6">AVAILABLE ON</p>
            <div className="flex justify-center md:justify-start">
              <span className="text-lg text-blue-500 mr-2 font-bold flex cursor-pointer">
                iOS <GoArrowUpRight className="mx-auto my-auto " size={20} />
              </span>
              <span className="text-lg text-blue-500 mr-2 font-bold">| </span>
              <span className="text-lg text-blue-500 mr-2 font-bold flex cursor-pointer">
                Android <GoArrowUpRight className="mx-auto my-auto cursor-pointer" size={20} />
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 px-4">
          <h1 className="font-bold text-2xl md:text-3xl">More ways to identify and discover music</h1>
        </div>

        <div className="flex flex-col bg-[#00B7FF] mt-8 rounded-3xl text-white mx-4 md:mx-6 p-4">
          <span className="font-bold text-xl md:text-2xl mx-auto mt-8">Shazam Browser Extension</span>
          <span className="mx-auto text-md md:text-xl mt-4 text-center">
            Identify songs in seconds from your web browser
          </span>
          <div className="bg-white flex flex-row rounded-md mx-auto mt-4 px-8 py-4 cursor-pointer">
            <img src={img3} className="w-6 h-6 my-auto" alt="chrome-logo" />
            <span className="text-[#066BFF] font-bold mx-2">Chrome Extension</span>
          </div>
          <img src={img4} className="w-[90%] md:w-[72%] mx-auto mt-4" alt="shazam-img" />
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-6 gap-6 px-4">
          <div className="bg-[#FFFFFF] rounded-3xl p-4 md:w-[30%] w-full">
            <img src={img5} alt="icons" className="w-10 h-10 mx-2" />
            <h2 className="mt-4 font-bold text-lg md:text-xl">Shazam on iOS Control Center</h2>
            <p className="text-gray-500 text-base md:text-lg">
              Identify songs directly from Control Center on your iPhone or iPad.
            </p>
            <div className="flex text-[#066BFF] mt-4">
              <span className="font-medium cursor-pointer">Learn More</span>
              <GoArrowUpRight className="ml-2 my-auto" size={16} />
            </div>
            <img src={img6} alt="phn-img" className="w-[80%] mx-auto mt-4" />
          </div>

          <div className="bg-[#FFFFFF] rounded-3xl p-4 md:w-[30%] w-full">
            <img src={img7} alt="icons" className="w-10 h-10 mx-2" />
            <h2 className="mt-4 font-bold text-lg md:text-xl">Pop Up Shazam on Android</h2>
            <p className="text-gray-500 text-base md:text-lg">
              Bring Shazam to your favorite Android apps with Pop Up Shazam.
            </p>
            <div className="flex text-[#066BFF] mt-4">
              <span className="font-medium cursor-pointer">Learn More</span>
              <GoArrowUpRight className="ml-2 my-auto" size={16} />
            </div>
            <img src={img8} alt="phn-img" className="w-[80%] mx-auto mt-4" />
          </div>

          <div className="bg-[#FFFFFF] rounded-3xl p-4 md:w-[30%] w-full">
            <img src={img7} alt="icons" className="w-10 h-10 mx-2" />
            <h2 className="mt-4 font-bold text-lg md:text-xl">Shazam on Android Notification</h2>
            <p className="text-gray-500 text-base md:text-lg">
              Use Android Notification to identify music with a swipe and tap.
            </p>
            <div className="flex text-[#066BFF] mt-4">
              <span className="font-medium cursor-pointer">Learn More</span>
              <GoArrowUpRight className="ml-2 my-auto" size={16} />
            </div>
            <img src={img9} alt="phn-img" className="w-[80%] mx-auto mt-4" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-20 gap-6 px-4">
          <div className="bg-[#E9DF2D] rounded-3xl p-8 md:p-16 flex flex-col w-full md:w-[32%]">
            <img src={img10} alt="snap" className="w-40 h-40 mx-auto mt-10" />
            <h1 className="font-bold text-2xl text-center mt-4">Shazam on Snapchat</h1>
            <h4 className="text-xl text-center mt-4">Identify songs playing around you while on Snapchat.</h4>
            <div className="flex justify-center font-bold mt-4">
              <span className="cursor-pointer">Learn More</span>
              <GoArrowUpRight className="ml-2 my-auto" size={16} />
            </div>
          </div>

          <div className="bg-[#000000] rounded-3xl p-8 md:p-16 flex w-full md:w-[58%] flex-col md:flex-row justify-between">
            <div className="text-white mt-4 md:mt-0">
              <div className="font-bold text-2xl">Shazam from <br></br> your wrist</div>
              <div className="font-medium text-xl mt-2">
                Shazam is available for both<br></br> Apple Watch and Android<br></br> Wear.
              </div>
            </div>
            <img src={img11} alt="watch-logo" className="w-[90%] md:w-[460px] h-auto mx-auto mt-8 md:mt-0" />
          </div>
        </div>

        <div className="bg-gray-800 text-white mt-4 p-2 text-center">
          <span> We use cookies - by using this site you agree to our Apple Privacy Policy</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GettheApp;