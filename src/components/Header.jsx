import React from "react";
import Navbar from "./Navbar";
import headerInfo from "./headerInfo.json";

const Header = () => {
  const { name, title, position } = headerInfo;
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: "url('/hh.png')" }}
      id="Header"
    >
      <Navbar />
      <div
        className="container text-center mx-auto py-4 px-6 md:px-20
        lg:px-42 text-white"
      >
        <h2 className="text-3xl font-bold">Hello! I am {name}</h2>
        <p className="text-xl mt-2">
          {title} • {position}
        </p>
        {/* <h2 className="text-2xl sm:text-4xl md:text-[45px] inline-block max-w-3xl font-semibold pt-20">
          Hello! I am Nazmul Hasan Majed.
          <span> Full Stack Web Developer • Programmer •</span>{" "}
          <span> Software Engineer.</span>
        </h2> */}
        <div className="space-x-6 mt-16 ">
          <a
            href="#Get Resume"
            className="border border-white px-8 py-3 rounded"
          >
            Get Resume{" "}
          </a>
          <a
            href="#Projects"
            className="border border-red-700 hover:bg-red-800 px-8 py-3 rounded"
          >
            Projects{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
