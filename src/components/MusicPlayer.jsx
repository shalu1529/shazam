import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

import { IoPlaySkipBackSharp,IoPlaySkipForward } from "react-icons/io5"

const PlayAudio = ({ song, nextSong, prevSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume to 100%
  const [showVolume, setShowVolume] = useState(false); // Toggle for volume slider

  // Handle play/pause functionality
  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update the audio source when a new song is selected
  useEffect(() => {
    if (audio) {
      audio.pause(); // Pause any previously playing song
    }
    if (song && song.attributes.previews.length > 0) {
      const newAudio = new Audio(song.attributes.previews[0].url);
      setAudio(newAudio);
      newAudio.addEventListener('loadedmetadata', () => {
        setDuration(newAudio.duration);
      });
      setIsPlaying(false);
    }
  }, [song]);

  // Track progress of the audio
  useEffect(() => {
    if (audio && isPlaying) {
      const updateProgress = () => {
        setProgress((audio.currentTime / audio.duration) * 100);
      };
      audio.addEventListener('timeupdate', updateProgress);

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });

      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [audio, isPlaying]);

  // Handle seeking when clicking on the progress bar
  const handleSeek = (e) => {
    const progressBar = e.target;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / progressBar.clientWidth) * audio.duration;
    audio.currentTime = newTime;
    setProgress((newTime / audio.duration) * 100);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="flex items-center justify-between bg-white text-black p-4 rounded-lg fixed bottom-5 left-5 right-5 shadow-lg">
      {/* Song info */}
      <div className="flex items-center space-x-4">
        <img
          src={song?.attributes?.artwork?.url?.replace("{w}x{h}", "80x80")}
          alt={song?.attributes?.albumName}
          className="w-16 h-16 rounded-lg"
        />
        <div>
          <h4 className="text-lg font-semibold">{song?.attributes?.name}</h4>
          <p className="text-sm text-gray-400">{song?.attributes?.artistName}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col items-center w-1/3">
        <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer" onClick={handleSeek}>
          <div
            className="bg-blue-500 h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-full text-xs text-gray-400 mt-1">
          <span>{Math.floor((audio?.currentTime || 0) / 60)}:{('0' + Math.floor((audio?.currentTime || 0) % 60)).slice(-2)}</span>
          <span>{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</span>
        </div>
      </div>

      {/* Controls and Volume Section */}
      <div className="flex items-center space-x-6">
        
        
        {/* Play, Forward, and Backward buttons aligned to the right */}
        <button onClick={prevSong} className="text-2xl hover:text-gray-400">
          <IoPlaySkipBackSharp size={20}/>
        </button>
        <button
          onClick={handlePlayPause}
          className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-3xl  hover:bg-gray-700"
        >
          {isPlaying ? <FaPause size={20}/> : <FaPlay size={20} />}
        </button>
        <button onClick={nextSong} className="text-2xl hover:text-gray-400">
          <IoPlaySkipForward size={20} />
        </button>


    {/* Volume Control with Toggle */}
        <div className="relative ">
          <FaVolumeUp
            onClick={() => setShowVolume(!showVolume)}
            className="text-xl cursor-pointer"
          />
          {showVolume && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="absolute top-[-40px] w-24 bg-gray-200 rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayAudio

