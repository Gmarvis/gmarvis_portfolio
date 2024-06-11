"use client";
import React from "react";
import Image from "next/image";
import { projectData } from "../../data";
import Link from "next/link";
import { UseInViewOptions } from "framer-motion";

function Projects() {
	return (
		<div className="flex gap-10 px-24 bigScreen:px-80 flex-wrap w-full  mobile:max-sm:px-0 justify-between items-center ">
			{projectData.map((project, i) => (
				<Link
					href={project.link}
					target="_blank"
					key={i}
					className="w-[310px] mobile:max-sm:w-[95vw] dark:bg-slate-800 dark:border dark:border-themecolor rounded-t-md mt-5 hover:cursor-pointer bg-white h-[350px] shadow-md hover:scale-110 duration-300"
				>
					<div
						style={{
							backgroundImage: `url(${project.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							objectFit: "fill",
						}}
						className="w-full h-[150px]  rounded-t-md  "
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
								<span
									key={i}
									className=" text-xs border py-1 rounded-md text-gray-500 dark:border-themecolor px-2"
								>
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
