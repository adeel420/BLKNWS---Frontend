import React from "react";
import { assets } from "../assets/assets";

const Second_Section = () => {
  return (
    <div className="bg-black text-white pt-5 md:pt-12 flex flex-col items-center px-4 sm:px-6 lg:px-12 ">
      {/* Logo */}
      <img
        src={assets.textLogo}
        alt="BLKNWS Logo"
        className="h-[80px] sm:h-[120px] md:h-[150px] md:-ml-15 -ml-8 object-contain"
      />

      <p
        className="font-bold text-sm sm:text-base md:text-lg"
        style={{ fontFamily: "VTC Du Bois, sans-serif" }}
      >
        Coming Soon
      </p>
      {/* Paragraph */}
      <p
        className="text-center max-w-[95%]  sm:max-w-[600px] md:max-w-[800px] mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
        style={{
          fontFamily: "VTC Du Bois, sans-serif",
        }}
      >
        Adapted from Kahlil Joseph’s renowned video art installation,
        <span className="font-semibold"> BLKNWS: Terms & Conditions </span>
        is a distinctive cinematic experience that mirrors the sonic textures of
        a record album, weaving fiction and history in an immersive journey
        where the fictionalized figures of W. E. B Du Bois and Marcus Garvey
        join artists, musicians, Joseph’s family, and even Twitter chats, in a
        vision for black consciousness.
      </p>
    </div>
  );
};

export default Second_Section;
