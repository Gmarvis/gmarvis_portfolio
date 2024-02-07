import React from "react";
import Image from "next/image";
import { projectData } from "../../data";

function Projects() {
  return (
    <div className="flex gap-10 flex-wrap w-full  mobile:max-sm:px-0 justify-center items-center ">
      {projectData.map((project, i) => (
        <div
          key={i}
          className="w-[300px] mobile:max-sm:w-[95vw]  mt-5  bg-white h-[300px] shadow-md hover:scale-110 duration-300"
        >
          <div
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "fill",
            }}
            className="w-full h-[150px]  rounded-md"
          ></div>
          <div className=" p-2 flex flex-col gap-2">
            <h3 className="font-bold">{project.name}</h3>
            <p className="text-xs text-gray-500">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
