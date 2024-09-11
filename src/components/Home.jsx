import React from 'react';
import Navbar from './Navbar'; 
import shazamBanner from '../assets/mobile.webp'; 
import qrcode from '../assets/qrcode.webp';
import shazam from '../assets/shazam.png'
function Home() {
  return (
    <div>
      
      <Navbar />

      
      <section className="bg-blue-500 text-white min-h-screen">
        <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={shazamBanner} 
              alt="Shazam on Mobile Banner" 
              title="Shazam on Mobile Banner" 
              className="w-full max-w-lg" 
            />
          </div>

          
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* <h1 className="text-5xl font-bold mb-6">Name songs in seconds</h1> */}
            <h1 className="text-5xl font-bold mb-6 leading-none">
              Name songs in <br /> 
              <span className="inline-block">seconds</span>
            </h1>
            <p className="text-xl mb-8">
              Find music, concerts, and more with Shazam
            </p>
            
            
            <div className="flex items-center space-x-4 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg w-[80%]">
              <img 
                src={qrcode} 
                alt="QR code to get the app" 
                className="w-20 h-20 rounded-md" 
              />
              <div>
                <p className="font-semibold">Get the app</p>
                <p>Scan the code with your smartphone camera to download the free app</p>
              </div>
            </div>

            
            <div className="mt-4">
              <a href="#" className="text-white font-bold hover:text-blue-200">Available on iOS</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-white font-bold hover:text-blue-200">Android</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-white font-bold hover:text-blue-200">More Devices</a>
            </div>
          </div>
        </div>

        <img 
          src={shazam} 
          alt="Shazam Logo" 
          className="absolute bottom-12 right-8 w-20 h-20 bg-white rounded-full p-4 "
        />
      </section>
    </div>
  );
}

export default Home;
