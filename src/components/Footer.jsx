import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/95 text-white px-4 py-6">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 mb-4">
        <a
          href="#Home"
          className="link link-hover hover:text-green-500 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#About"
          className="link link-hover hover:text-green-500 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#Skills"
          className="link link-hover hover:text-green-500 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="link link-hover hover:text-green-500 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#Contact"
          className="link link-hover hover:text-green-500 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={28}
            className="hover:text-green-500 transition-colors duration-300"
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub
            size={28}
            className="hover:text-green-500 transition-colors duration-300"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={28}
            className="hover:text-green-500 transition-colors duration-300"
          />
        </a>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center mb-2 px-0 mx-0 p-0">
        <img
          src={assets.logo_img11}
          alt="Logo"
          className="w-24 md:w-24 lg:w-36 h-auto"
        />
      </div>

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>
          Copyright © 2025 - All rights reserved by{" "}
          <span className="text-green-500 font-semibold">
            Md. Nazmul Hasan Majed
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
