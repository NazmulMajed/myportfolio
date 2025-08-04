import React from "react";
import { FaBootstrap, FaFigma, FaNodeJs } from "react-icons/fa";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

// Reusable Skill Component
const Skill = ({ Icon, name, link }) => (
  <div className="flex flex-col items-center mb-4 mt-4 px-0 py-0">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center hover:text-blue-500 transition-colors duration-300"
    >
      <Icon />
      <span className="mt-2">{name}</span>
    </a>
  </div>
);

const Skills = () => {
  return (
    <div
      className="mb-0 flex flex-col md:flex-row min-h-screen bg-black/95"
      id="Skills"
    >
      {/* 'My Skills' Section */}
      <div className="w-full md:w-16 bg-black/89 flex items-center justify-center px-4 py-6 md:py-2 md:flex-col">
        <h2 className="w-50 text-3xl md:text-3xl font-bold text-white transform md:-rotate-90 py-4 px-6">
          My Skills
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col justify-center p-6 sm:p-10">
        <h3 className="text-3xl font-bold mb-4 text-white text-center md:text-left underline hover:text-green-700">
          What I Do
        </h3>
        <p className="max-w-300 text-white text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
          I specialize in building modern, responsive web applications using
          React.js, Node.js, MongoDB, and more.{" "}
          <span>I love solving real-world problems with clean code.</span>
        </p>

        {/* Skill Icons Grid */}
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 md:text-xl sm:text-lg lg:text-2xl text-green-700">
          <Skill Icon={FaReact} name="React" link="https://reactjs.org" />
          <Skill Icon={SiNextdotjs} name="Next.js" link="https://nextjs.org" />
          <Skill Icon={FaNodeJs} name="Node.js" link="https://nodejs.org" />
          <Skill
            Icon={SiExpress}
            name="Express.js"
            link="https://expressjs.com"
          />
          <Skill Icon={SiMongodb} name="MongoDB" link="https://mongodb.com" />
          <Skill
            Icon={SiMongoose}
            name="Mongoose"
            link="https://mongoosejs.com"
          />
          <Skill Icon={GrMysql} name="MySQL" link="https://www.mysql.com" />
          <Skill
            Icon={SiFirebase}
            name="Firebase"
            link="https://firebase.google.com"
          />
          <Skill
            Icon={SiJavascript}
            name="JavaScript"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skill Icon={FaPython} name="Python" link="https://www.python.org" />
          <Skill Icon={FaGitAlt} name="Git" link="https://git-scm.com" />
          <Skill Icon={SiVercel} name="Vercel" link="https://vercel.com" />
          <Skill
            Icon={SiNetlify}
            name="Netlify"
            link="https://www.netlify.com"
          />
          <Skill
            Icon={FaHtml5}
            name="HTML5"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <Skill
            Icon={FaCss3Alt}
            name="CSS3"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <Skill
            Icon={FaBootstrap}
            name="Bootstrap"
            link="https://getbootstrap.com"
          />
          <Skill
            Icon={SiTailwindcss}
            name="Tailwind CSS"
            link="https://tailwindcss.com"
          />
          <Skill Icon={FaFigma} name="Figma" link="https://www.figma.com" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
