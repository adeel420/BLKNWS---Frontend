import { assets } from "../assets/assets";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center gap-5 sm:gap-6 py-12 sm:py-16 px-4">
      {/* Copyright Text */}
      <p className="text-center text-xs sm:text-sm md:text-base">
        © 2025 Rich Spirit, LLC. All rights reserved
      </p>

      {/* Logo */}
      <img
        src={assets.coloredLogo}
        alt="Rich Spirit Logo"
        className="h-8 sm:h-10 md:h-10 w-auto object-contain"
      />
      <div className="text-white flex items-center gap-6">
        <a
          href="https://www.tiktok.com/@richspirit____?_t=ZP-8zmho9NNJLb&_r=1"
          className="text-3xl cursor-pointer "
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.instagram.com/richspirit___________/"
          className="text-3xl cursor-pointer"
        >
          <FaInstagram />
        </a>
        <a href="" className="text-3xl cursor-pointer">
          <FaYoutube />
        </a>
        <a
          href="https://x.com/richspiritfilm"
          className="text-3xl cursor-pointer"
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
