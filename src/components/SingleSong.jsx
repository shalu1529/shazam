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
