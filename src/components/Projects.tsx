"use client";
import React from "react";
import Image from "next/image";
import { projectData } from "../../data";
import Link from "next/link";
import { UseInViewOptions } from "framer-motion";

function Projects() {
  return (
    <div className="flex gap-10 flex-wrap w-full  mobile:max-sm:px-0 justify-center items-center ">
      {projectData.map((project, i) => (
        <Link
          href={project.link}
          target="_blank"
          key={i}
          className="w-[310px] mobile:max-sm:w-[95vw]  mt-5 hover:cursor-pointer bg-white h-[300px] shadow-md hover:scale-110 duration-300"
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
          <div className=" p-2 flex flex-col gap-2 justify-between">
            <Link href={project.link} target="_blank">
              <h3 className="font-bold text-themecolor underline">
                {project.name}
              </h3>
            </Link>
            <p className="text-xs text-gray-500">{project.description}</p>
            {/* {project.demo && (
              <p className="flex flex-col">
                Demo Account: <span> Email {project.demo.email}</span>
                <span> Password {project.demo.password}</span>
              </p>
            )} */}
            <div className="flex gap-2 flex-wrap">
              {project.technology.map((tool, i) => (
                <span key={i} className=" text-xs border px-1 text-gray-500">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
