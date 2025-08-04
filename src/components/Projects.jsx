import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="w-full bg-black/96 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl  md:text-3xl font-bold text-white border border-b-emerald-600 text-center py-4 px-6">
          My Projects
        </h2>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
