import React from "react";
import { assets } from "../assets/assets";
import aboutInfo from "./aboutInfo.json";

const About = () => {
  const { summary } = aboutInfo;

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-6 bg-black/89 sm:mx-0"
      id="About"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-green-500">me</span>
        </h2>
        <p className="text-white text-sm sm:text-base md:text-xl lg:text-[30px] xl:text-xl text-justify leading-relaxed tracking-wide px-4 md:px-6 lg:px-12">
          {summary}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
          <button className="border-2 border-green-900 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-950 transition">
            GET RESUME
          </button>
          <button className="border-2 border-green-900 text-white px-5 py-2 rounded hover:bg-green-500 transition">
            MY SKILLS
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={assets.header_img3}
          alt="About Me Image"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
