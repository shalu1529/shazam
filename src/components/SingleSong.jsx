// // SingleSongComponent.js
// import React from "react";
// import { useParams } from "react-router-dom"; // To get song id from the URL
// import { musicData } from "../tempDate";

// const SingleSongComponent = () => {
//   const { id } = useParams(); // Get the song id from the URL
//   const song = musicData.data.find((song) => song.id === id); // Find the song in musicData

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//       <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
//         <div className="mb-6">
//           <img
//             src={song.attributes.artwork.url.replace("{w}x{h}", "300x300")}
//             alt={song.attributes.albumName}
//             className="rounded-lg"
//           />
//         </div>
//         <h1 className="text-3xl font-bold">{song.attributes.name}</h1>
//         <p className="text-lg">{song.attributes.artistName}</p>
//         <p className="text-sm text-gray-400">{song.attributes.albumName}</p>

//         {/* Add any other song details as needed */}
//         <div className="mt-4">
//           <a
//             href={song.attributes.url}
//             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//           >
//             Listen on Apple Music
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleSongComponent;



// import React from 'react';
// import { useParams } from 'react-router-dom'; // Assuming you use react-router
// import { musicData } from '../tempDate'; // Importing the song data
// import music from '../assets/music.png';
// import spin from '../assets/spin.png';


// const SongDetailPage = () => {
//   const { songId } = useParams(); // Get song ID from route params
//   const song = musicData.data.find((s) => s.id === songId); // Fetch the selected song

//   if (!song) {
//     return <div>Song not found!</div>;
//   }

//   const { artwork, artistName, name, genreNames, url } = song.attributes;
//   const handlePlayClick = () => {
//     window.location.href = url; // Redirect to the song URL when the button is clicked
//   };

//   return (
//     <div
//       className="relative h-[50vh] text-white"
//       style={{ backgroundColor: `#${artwork.bgColor}` }}
//     >
//       {/* Container for song details */}
//       <div className="absolute top-28 left-0 w-full h-full flex  items-center px-8 pt-20">
//         {/* Image with overlap */}
//         <div className="relative w-[250px]">
//           <img
//             src={artwork.url.replace("{w}x{h}", "250x250")}
//             alt={name}
//             className="rounded-lg shadow-lg relative z-10"
//           />
//         </div>

//         {/* Song Information */}
//         <div className="ml-7">
//           <h1 className="text-4xl font-bold">{name}</h1>
//           <p className="text-2xl">{artistName}</p>
//           <p className="text-lg text-white">{genreNames.join(", ")}</p>
//           <button
//             onClick={handlePlayClick}
//             className="mt-8 flex items-center px-1 py-2 w-[200px] font-bold bg-black text-white rounded-full hover:bg-blue-600"
//           >
//             <img src={music} className='w-[20%] px-1' />
//             PLAY FULL SONG
//           </button>

          
//         </div>
//         <div className='flex justify-end'>
//             <img src ={spin} className='w-[30%]'/>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default SongDetailPage;


import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you use react-router
import { musicData } from '../tempDate'; // Importing the song data
import music from '../assets/music.png';
import spin from '../assets/spin.png';

const SongDetailPage = () => {
  const { songId } = useParams(); // Get song ID from route params
  const song = musicData.data.find((s) => s.id === songId); // Fetch the selected song

  // Reference to the audio element
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track if music is playing

  if (!song) {
    return <div>Song not found!</div>;
  }

  const { artwork, artistName, name, genreNames, url, previews } = song.attributes;

  const handlePlayClick = () => {
    window.location.href = url; // Redirect to the song URL when the button is clicked
  };

  const handlePlayPauseAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the song
      } else {
        audioRef.current.play(); // Play the song
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <div
      className="relative h-[50vh] text-white"
      style={{ backgroundColor: `#${artwork.bgColor}` }}
    >
      {/* Container for song details */}
      <div className="absolute top-28 left-0 w-full h-full flex items-center px-8 pt-20">
        {/* Image with overlap */}
        <div className="relative w-[250px]">
          <img
            src={artwork.url.replace("{w}x{h}", "250x250")}
            alt={name}
            className="rounded-lg shadow-lg relative z-10"
          />
        </div>

        {/* Song Information */}
        <div className="ml-7">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-2xl">{artistName}</p>
          <p className="text-lg text-white">{genreNames.join(", ")}</p>
          <button
            onClick={handlePlayClick}
            className="mt-8 flex items-center px-1 py-2 w-[200px] font-bold bg-black text-white rounded-full hover:bg-blue-600"
          >
            <img src={music} className='w-[20%] px-1' />
            PLAY FULL SONG
          </button>
        </div>

        {/* Spin Image for Music Play/Pause with Rotation */}
        <div className='flex justify-end ml-28'>
          <img
            src={spin}
            className={`w-[30%] cursor-pointer ${isPlaying ? 'animate-spin' : ''}`}
            onClick={handlePlayPauseAudio} // Play/Pause music on click
          />
        </div>
      </div>

      {/* Audio element (uses song preview URL) */}
      <audio ref={audioRef} src={previews[0].url} />
    </div>
  );
};

export default SongDetailPage;
