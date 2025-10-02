import React, { useRef, useState } from "react";
import First_Section from "../component/First_Section";
import Popup from "../component/popup/Popup";
import CursorText from "../component/CursorText";
import { assets } from "../assets/assets";
import { MdKeyboardArrowDown, MdVolumeOff, MdVolumeUp } from "react-icons/md";

const RSVP = () => {
  const [popup, setPopup] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const sectionRef = useRef(null);
  const [isHoveringBuffer, setIsHoveringBuffer] = useState(false);
  const audioRef = useRef(null);

  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(audioRef.current.muted);
      }
    }
  };

  const handleStartAudio = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current
        .play()
        .then(() => setAudioStarted(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  };
  return (
    <div
      className="bg-[black]"
      style={{ zIndex: "-111111111111111111111111111111111111111111111111" }}
      onClick={handleStartAudio}
    >
      <div className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden ">
        <audio ref={audioRef} src={assets.audio} loop autoPlay />

        {/* Background Video */}
        <div className="flex items-center justify-center w-full h-full relative">
          <video
            src={assets.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-[380px] h-[380px] md:w-[630px] md:h-[630px] object-cover z-[1] vedio-hero"
          ></video>
          <div
            className="w-[380px] h-[380px] rounded-full md:w-[630px] md:h-[630px] absolute object-cover z-[2] vedio-hero"
            onClick={handleToggleAudio}
            ref={sectionRef}
          ></div>
        </div>

        <div className="flex items-center gap-2 bg-transparent sm:gap-4 absolute top-2 left-2 sm:top-3 sm:left-3 md:top-5 md:left-5 ">
          {/* Buffer/Audio Control Container */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsHoveringBuffer(true)}
            onMouseLeave={() => setIsHoveringBuffer(false)}
            onClick={handleToggleAudio}
          >
            {/* Buffer Image */}
            <img
              src={assets.buffer}
              alt="music buffer"
              className={`h-6 sm:h-7 md:h-9 object-contain transition-opacity duration-200 ${
                isHoveringBuffer ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Hover Icon Overlay */}
            {isHoveringBuffer && (
              <div className="absolute inset-0 flex items-center justify-center">
                {isMuted ? (
                  <MdVolumeUp className="text-white text-lg sm:text-xl md:text-2xl" />
                ) : (
                  <MdVolumeOff className="text-white text-lg sm:text-xl md:text-2xl" />
                )}
              </div>
            )}
          </div>

          <div className="text-white z-[11111111111111111111111111111]">
            <h1 className="text-[8px] md:text-[14px] ">De Onde Vem</h1>
            <h1 className="text-[8px] md:text-[14px] text-[#A6A6A6] ">
              Avila Santo
            </h1>
          </div>
        </div>

        {/* Ticket Style Box */}

        {/* Popup */}
        <Popup setPopup={setPopup} />
        <div className="bg-black relative">
          {/* aapka purana section code yahan */}

          {/* CursorText sirf is section ke andar visible hoga */}
          {popup && <CursorText isMuted={isMuted} sectionRef={sectionRef} />}
        </div>
      </div>
    </div>
  );
};

export default RSVP;
