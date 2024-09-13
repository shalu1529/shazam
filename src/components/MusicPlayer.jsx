import { useEffect, useRef, useState } from "react";
import appleBlack from "../assets/appleBlack.svg";

export default function MusicPlayer() {
  const [vol, setVol] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const player = useRef(null);
  useEffect(() => {
    const interval = setInterval(myTimer, 1000);
    function myTimer() {
      setCurrentTime(Math.trunc(player.current.currentTime));
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);
  function trackPlay() {
    setPlay(!play);
    if (play) {
      player.current?.pause();
    } else {
      player.current?.play();
    }
  }
  function changeVolume(value) {
    player.current.volume = value / 100;
    setVol(value);
  }
  return (
    <div className="flex fixed bottom-0 h-[100px] w-[100%] py-3 justify-evenly bg-yellow-200 items-center">
      <div className="flex gap-1 px-2.5 py-1 items-center bg-black rounded-3xl">
        <img src={appleBlack} alt="" />
        <h1 className="text-white text-[18px] my-font">Music</h1>
      </div>
      <audio
        ref={player}
        className="w-[100%]"
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/41/4b/9c/414b9ce4-3ecb-3308-0f30-3979285c582b/mzaf_18100226636523113282.plus.aac.ep.m4a"
      ></audio>
      <div className="flex gap-4 text-[18px] my-font items-center">
        <h1>
          0{Math.trunc(currentTime / 60)}:
          {String(Math.trunc(currentTime % 60)).padStart(2, 0)}
        </h1>
        <input
          min={0}
          max={130}
          step={1}
          value={currentTime}
          type="range"
          name=""
          id="songLength"
        />
        <h1>1:30</h1>
      </div>
      <div className=" text-[24px] flex items-center gap-2.5">
        <ion-icon name="play-skip-back"></ion-icon>{" "}
        <div
          className="flex cursor-pointer justify-center rounded-full w-[40px] h-[40px] bg-[#00000033] items-center"
          onClick={() => {
            trackPlay(!play);
          }}
        >
          {play === false ? (
            <ion-icon name="play"></ion-icon>
          ) : (
            <ion-icon name="pause"></ion-icon>
          )}
        </div>
        <ion-icon name="play-skip-forward"></ion-icon>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[24px]">
          {vol === 0 && <ion-icon name="volume-mute"></ion-icon>}
          {vol > 0 && vol <= 30 && <ion-icon name="volume-low"></ion-icon>}
          {vol > 30 && vol <= 60 && <ion-icon name="volume-medium"></ion-icon>}
          {vol > 60 && vol <= 100 && <ion-icon name="volume-high"></ion-icon>}
        </div>
        <input
          value={vol}
          defaultValue={50}
          type="range"
          id="inputVol"
          min={0}
          max={100}
          step={10}
          onChange={(e) => changeVolume(Number(e.target.value))}
        />
      </div>
    </div>
  );
}