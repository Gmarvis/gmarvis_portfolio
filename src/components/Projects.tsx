import React from "react";
import Image from "next/image";
import { projectData } from "../../data";

function Projects() {
  return (
    <div className="grid w-full grid-cols-3 mobile:max-sm:grid-cols-1 gap-4">
      {projectData.map((project, i) => (
        <div key={i}>
          <Image
            src={project.image}
            width={200}
            height={200}
            alt={project.name + ` image`}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
