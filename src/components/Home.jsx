import shazamBanner from '../assets/mobile.webp'; 
import qrcode from '../assets/qrcode.webp';
import music from '../assets/music2.webp';
import Footer from './Footer';


function Home() {

  return (
    <div>
      <section className="min-h-screen text-white" style={{
        backgroundImage: 'linear-gradient(180deg, #0bf, #066aff 50%)'
      }}>
        <div className="container mx-auto py-20 px-6 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Right section - Phone Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img 
              src={shazamBanner} 
              alt="Shazam on Mobile Banner" 
              title="Shazam on Mobile Banner" 
              className="w-full max-w-xs md:max-w-lg" 
            />
          </div>

          {/* Left section - Text and QR code */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-none">
              Name songs in <br /> 
              <span className="inline-block">seconds</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Find music, concerts, and more with Shazam
            </p>

            {/* QR code section */}
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg w-full md:w-[80%]">
              <img 
                src={qrcode} 
                alt="QR code to get the app" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-md" 
              />
              <div>
                <p className="font-semibold">Get the app</p>
                <p>Scan the code with your smartphone camera to download the free app</p>
              </div>
            </div>

            {/* Links */}
            <div className="mt-4">
              <a href="https://apps.apple.com/us/app/shazam-find-music-concerts/id284993459?amp%3Bat=11l3eE&amp%3Bct=5348615A-616D-3235-3830-44754D6D5973" 
              
               className="text-white font-bold hover:text-blue-200">Available on iOS</a>
              <span className="mx-2">|</span>
              <a href="https://play.google.com/store/apps/details?id=com.shazam.android"
              
               className="text-white font-bold hover:text-blue-200">Android</a>
              <span className="mx-2">|</span>
              <a href="/get-app" className="text-white font-bold hover:text-blue-200">More Devices</a>
            </div>
          </div>
        </div>
      </section>

      {/* Promo section */}
      <div className="flex justify-center items-center py-16">
        <div className="bg-red-500 bg-gradient-to-b from-[#e2425a] to-[#e10a22] rounded-lg p-6 md:p-10 text-white w-full max-w-lg md:max-w-[70%] shadow-lg h-96 md:h-auto">
          <div className="items-center">
            <img
              src={music}
              alt="Apple Music Classical"
              className="w-12 h-12 rounded-lg shadow-lg"
            />
            <h2 className="text-2xl md:text-4xl font-bold mt-4">
              Get up to 2 months free of <br /> 
              <span className="inline-block">Apple Music Classical</span>
            </h2>
          </div>
          <button className="mt-20 bg-white text-red-500 font-bold py-2 px-4 rounded-lg">
            TRY NOW
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Fixed Shazam Logo */}
      
    </div>
  );
}

export default Home;
