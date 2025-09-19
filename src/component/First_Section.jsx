import React, { useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "./popup/Popup";
import backPopup from "../assets/images/back-popup.png"; // relative path correct

const First_Section = () => {
  const [popup, setPopup] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
      className="bg-[black] "
      style={{ zIndex: "-111111111111111111111111111111111111111111111111" }}
      onClick={handleStartAudio}
    >
      <div className="relative w-full h-[100vh] overflow-hidden ">
        <audio ref={audioRef} src={assets.audio} loop autoPlay />

        {/* Background Video */}
        <div className="flex items-center justify-center w-full h-full relative">
          <video
            src={assets.video}
            autoPlay
            loop
            muted
            playsInline
            className=" 
               w-[630px] h-[630px] object-cover z-[1] vedio-hero"
          ></video>
        </div>

        <div className="flex items-center gap-4 absolute top-2 left-2 sm:top-3 sm:left-3 md:top-5 md:left-5 ">
          <img
            src={assets.buffer}
            alt="music buffer"
            className="h-6 sm:h-7 md:h-9 object-contain"
            onClick={handleToggleAudio}
          />

          <div className="text-white">
            <h1 className="text-[14px] ">De Onde Vem</h1>
            <h1 className="text-[14px] text-[#A6A6A6] ">Avila Santo</h1>
          </div>
        </div>

        {/* Ticket Style Box */}
        <div className="ticket-box absolute top-2 right-[-12px] sm:top-3 sm:right-0 md:top-5 md:right-[-30px] z-10">
          {/* Ticket container */}
          <div className="relative">
            {/* Ticket background */}
            <img
              src={assets.ticket}
              alt="ticket"
              className="w-[220px] h-[70px] sm:w-[260px] sm:h-[85px] md:w-[380px] md:h-[110px]"
            />

            {/* Content overlay */}
            <div className="absolute inset-0 flex ml-6 mt-[-6px] sm:mt-[-8px] sm:ml-7 md:ml-15 md:mt-1 lg:ml-15 justify-between items-start">
              {/* Left Section */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3">
                  <img
                    src={assets.logo}
                    alt="logo"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                  />
                  <div>
                    <h1 className="text-sm sm:text-base md:text-lg font-bold flex items-center">
                      BLKNWS
                      <MdKeyboardArrowDown className="ml-1 text-xs sm:text-sm" />
                    </h1>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold">
                      : TERMS & CONDITIONS
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="border-t flex flex-row items-center w-[85%] text-xs sm:text-sm">
                  <button
                    onClick={() => setPopup(true)}
                    className="px-1 sm:px-2 py-1.5 sm:py-2 border-r cursor-pointer transition text-center flex-1 "
                  >
                    R S V P
                  </button>
                  <button className="px-1 sm:px-2 py-1.5 sm:py-2 cursor-pointer transition text-center flex-1 ">
                    Teaser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popup */}
        {popup && <Popup setPopup={setPopup} />}
      </div>
    </div>
  );
};

export default First_Section;
