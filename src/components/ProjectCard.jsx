import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectinfo from "./projectinfo.json"; //
// import assets from "../assets"; // image asset থাকে (optional)

const ProjectCard = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(projectinfo);
  }, []);

  return (
    <div className="w-full bg-black/95 py-16 px-4 mt-6 mb-4">
      <div className="max-w-7xl mx-auto">
        {/* Cards Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center space-y-5"
            >
              {/* Swiper Start */}
              <div className="relative w-[320px] h-[200px]">
                {/* Custom Arrows */}
                <div className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                  &#8592;
                </div>
                <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                  &#8594;
                </div>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full h-full"
                >
                  {project.images &&
                    project.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`Project ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              {/* Swiper End */}

              {/* Project Details */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {project.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {project.description}
              </p>

              {/* Technology Tags */}
              <ul className="flex flex-wrap justify-center gap-3">
                {project.languages.map((tech, index) => (
                  <li key={index}>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium hover:bg-blue-200 transition">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Github & Live Link */}
              <div className="flex gap-5 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Cards End */}
      </div>
    </div>
  );
};

export default ProjectCard;
