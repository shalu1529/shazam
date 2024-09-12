// import React from 'react';
// import radioicn from '../assets/radioicon.svg'

// function Radio() {
//   return (
//     <div className="relative w-full h-screen text-white">
//       {/* Background Image with limited height (slightly more than half) */}
//       <div className="relative w-full h-[50vh]">
//         <img
//           src="https://assets.shazam.com/website/images/radiospins/spins.webp"
//           alt="Background"
//           className="absolute top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
//           style={{ objectFit: 'cover', overflow: 'hidden' }}
//         />

//         {/* Background Gradient Overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(to right, black 0%, black 2%, var(--color-gray-300) 0%, var(--color-gray-300) 100%)`,
//             zIndex: -1,
//             pointerEvents: 'none',
//           }}
//         ></div>
//       </div>

//       {/* The remaining part of the screen (solid background color) */}
//       <div className=" h-[40vh]"></div>

//       {/* Content Container (Centers the content vertically in the screen) */}
//       <div className="absolute top-0 w-full h-full flex flex-col items-center  space-y-8 pt-32">
//         {/* Title and Subtitle */}
//         <img src ={radioicn} alt ="radio"/>
//         <h1 className="text-5xl font-bold">Top 200 on Radio</h1>
//         <p className="text-lg">Tracks with the most airplay in the world this week</p>

//         {/* Buttons for Top 200 and Genres */}
//         <div className="flex space-x-4">
//           <button className="px-4 py-2 text-black bg-white rounded-full font-bold">
//             TOP 200
//           </button>
//           <button className="px-4 py-2 text-white bg-blue-600 rounded-full font-bold">
//             GENRES <span className="ml-2">&#9662;</span> {/* Down arrow */}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Radio;


import React from 'react';
import logo from '../assets/logo.svg'


function Radio() {

  

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div className="relative w-full h-[50vh]">
        <img
          src="https://assets.shazam.com/website/images/radiospins/spins.webp"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
          style={{ objectFit: 'cover', overflow: 'hidden' }}
        />
      </div>

      {/* Content Container */}
      <div className="absolute top-0 w-full h-full flex flex-col items-center space-y-6 pt-20">
        {/* Shazam Icon (Direct SVG) */}
        <img
        src ={logo}
          className="w-[72px] h-[72px] md:w-[64px] md:h-[64px] z-10"
          
        
        />
          
        {/* Title and Subtitle */}
        <h1 className="text-5xl ">Top 200 on Radio</h1>
        <p className="text-lg">Tracks with the most airplay in the world this week</p>

        {/* Buttons for Top 200 and Genres */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-black bg-white rounded-full font-bold">
            TOP 200
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-full font-bold">
            GENRES <span className="ml-2">&#9662;</span> {/* Down arrow */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Radio;



