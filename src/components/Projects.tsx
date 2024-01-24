import React from "react";
import Image from "next/image";
import { projectData } from "../../data";

function Projects() {
  return (
    <div className="grid w-full grid-cols-3 self-center mobile:max-sm:grid-cols-1 gap-4 justify-center items-center">
      {projectData.map((project, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "fill",
          }}
          className="w-[25vw] h-[25vw] rounded-md border-r border-b border-themecolor"
        >
          <div className="bg-white opacity-90 shadow-md w-full h-full rounded justify-center items-center flex flex-col">
            <h3>{project.name}</h3>
            <p>{project.short_title}</p>
            <p className="text-center">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
