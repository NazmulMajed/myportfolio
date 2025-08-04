import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-white/15">
      <div
        className="container mx-auto flex justify-between 
      items-center py-4 px-6 md:px-20 lg:px-32 "
      >
        <img src={assets.logo_img11} className="w-[120px] h-[100px]" alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#About" className="cursor-pointer hover:text-green-500">
            About
          </a>
          <a href="#Skills" className="cursor-pointer hover:text-green-500">
            Skill
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-green-500">
            Projects
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-green-500">
            Contact
          </a>
        </ul>
        <button className="hidden md:block bg-green-500 px-8 py-2 rounded-full cusror-pointer hover:text-white">
          RESUME
        </button>
        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-[35px] h-[35px] cursor-pointer "
          alt="close"
        />
      </div>
      {/* ----mobile menu------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? `fixed w-full` : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden
       bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={assets.cross_arrow}
            className="w-[45px] h-[45px] "
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#About"
            className="px-4 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Skill"
            className="px-4 rounded-full inline-block"
          >
            Skills
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Projects"
            className="px-4 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href=""
            className="px-4 rounded-full inline-block"
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
