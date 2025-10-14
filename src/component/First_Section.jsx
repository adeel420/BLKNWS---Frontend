import React, { useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";
import { MdKeyboardArrowDown, MdVolumeOff, MdVolumeUp } from "react-icons/md";
import CursorText from "./CursorText";
import { useNavigate } from "react-router-dom";
import Popup from "./popup/Popup";

const First_Section = () => {
  const [audioStarted, setAudioStarted] = useState(false);
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const sectionRef = useRef(null);
  const [isHoveringBuffer, setIsHoveringBuffer] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const [customize, setCustomize] = useState(false);

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

  // 🧁 Cookie popup handlers (no localStorage, always show on reload)
  const handleAcceptAll = () => {
    setShowCookies(false);
  };

  const handleDeclineAll = () => {
    setShowCookies(false);
  };

  const handleEssentialOnly = () => {
    setShowCookies(false);
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
            <img
              src={assets.buffer}
              alt="music buffer"
              className={`h-6 sm:h-7 md:h-9 object-contain transition-opacity duration-200 ${
                isHoveringBuffer ? "opacity-0" : "opacity-100"
              }`}
            />
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

        {/* Ticket Box */}
        <div className="ticket-box absolute top-2 right-[-12px] sm:top-3 sm:right-0 md:top-5 md:right-[-30px] z-10">
          <div className="relative">
            <img
              src={assets.ticket}
              alt="ticket"
              className="w-[220px] h-[70px] sm:w-[260px] sm:h-[85px] md:w-[380px] md:h-[110px]"
            />
            <div className="absolute inset-0 flex ml-6 mt-[-6px] sm:mt-[-8px] sm:ml-7 md:ml-15 md:mt-1 lg:ml-15 justify-between items-start">
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
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold">
                      : TERMS & CONDITIONS
                    </p>
                  </div>
                </div>

                <div className="border-t flex flex-row items-center w-[85%] text-xs sm:text-sm">
                  <button
                    onClick={() => setPopup(true)}
                    className="px-1 flex gap-2 md:gap-4 items-center justify-center sm:px-2 py-1.5 sm:py-2 border-r cursor-pointer transition text-center flex-1 "
                  >
                    <span>R</span>
                    <span>S</span>
                    <span>V</span>
                    <span>P</span>
                  </button>
                  <a
                    href="https://www.youtube.com/watch?v=bfSphlAyHLs&feature=youtu.be"
                    target="_blank"
                    className="px-1 ml-[0] md:ml-[-18px] sm:px-2 py-1.5 sm:py-2 cursor-pointer transition text-center flex-1 "
                  >
                    TEASER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popup */}
        {popup && <Popup setPopup={setPopup} />}
        <div className="bg-black relative">
          {!popup && <CursorText isMuted={isMuted} sectionRef={sectionRef} />}
        </div>

        {/* 🍪 Cookies Consent Popup */}
        {showCookies && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#111] text-white p-5 rounded-xl shadow-lg max-w-lg w-[90%] border border-gray-700 z-[99999]">
            <h2 className="text-lg font-semibold mb-2">
              We use cookies to enhance your experience
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              We use cookies and similar technologies to help personalize
              content, provide social media features, and analyze our traffic.
              We also share information about your use of our site with our
              social media, advertising, and analytics partners.
            </p>

            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              <button
                onClick={handleEssentialOnly}
                className="bg-gray-800 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded-md text-sm"
              >
                Essential Only
              </button>
              <button
                onClick={() => setCustomize(!customize)}
                className="bg-gray-800 hover:bg-gray-700 cursor-pointer px-3 py-2 rounded-md text-sm"
              >
                Customize
              </button>
              <button
                onClick={handleDeclineAll}
                className="bg-gray-800 hover:bg-gray-700 px-6 md:px-3 py-2 cursor-pointer rounded-md text-sm"
              >
                Decline All
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-[#032592] hover:bg-[#031a60] cursor-pointer px-3 py-2 rounded-md text-sm"
              >
                Accept All
              </button>
            </div>

            {customize && (
              <div className="mt-3 text-xs text-gray-400">
                <p>
                  You can customize cookie preferences in your browser settings.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default First_Section;
