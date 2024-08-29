"use client";
import React from "react";
import Image from "next/image";
import { projectData } from "../../data";
import Link from "next/link";
import { UseInViewOptions } from "framer-motion";

function Projects() {
    return (
        <div
            id="projects"
            className=" dark:bg-slate-900 py-20 sm:max-sm:h-[80vh]"
        >
            <h3 className="text-center pt-20 font-bold text-[40px] text-themecolor ">
                My Projects
            </h3>

            <div className="flex gap-10 px-24 bigScreen:px-80 flex-wrap w-full mobile:max-sm:items-center mobile:max-sm:flex-col mobile:max-sm:px-0 justify-center items-center  py-20">
                {projectData.map((project, i) => (
                    <Link
                        href={project.link}
                        target="_blank"
                        key={i}
                        className="w-[30%] mobile:max-sm:w-[90vw] relative mobile:max-sm:h-auto dark:bg-slate-800   rounded-md mt-5 hover:cursor-pointer bg-white h-[380px] shadow-md hover:scale-105 duration-300"
                    >
                        <div
                            style={{
                                backgroundImage: `url(${project.image})`,
                                // backgroundImage: `linear-gradient(to top, rgba(7, 31, 36, 10), rgba(7, 31, 36, 0)),
                                // url('${project.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                objectFit: "fill",
                            }}
                            className="flex rounded-t-md "
                        >
                            <div className="w-full h-[200px]  rounded-t-md dark:bg-slate-900/20 duration-300"></div>
                        </div>

                        <div className=" p-2 flex flex-col gap-2 justify-between">
                            <Link href={project.link} target="_blank">
                                <h3 className="font-bold text-themecolor underline">
                                    {project.name}
                                </h3>
                            </Link>
                            <p className="text-xs text-gray-500 dark:text-slate-400 flex flex-col flex-grow">
                                {project.description}
                            </p>

                            <div className="flex gap-2 flex-wrap absolute bottom-4">
                                {project.technology.map((tool, i) => (
                                    <span
                                        key={i}
                                        className=" text-xs border dark:text-slate-400 py-1 rounded-md text-gray-500 dark:border-themecolor px-2"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
