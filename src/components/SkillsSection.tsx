import React from "react";
// React Icons
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const SkillsSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const gridVariants = {
		hidden: {
			opacity: 0,
		},
		show: { opacity: 1 },
	};
	const skills = [
		{
			name: "HTML/CSS",
			icon: (
				<TiHtml5
					size={30}
					style={{
						color: "#e44d26",
					}}
				/>
			),
		},
		{
			name: "JavaScript",
			icon: (
				<IoLogoJavascript
					size={30}
					style={{
						color: "#efd81d",
					}}
				/>
			),
		},
		{
			name: "typeScript",
			icon: (
				<SiTypescript
					size={30}
					style={{
						color: "#2f74c0",
					}}
				/>
			),
		},
		{
			name: "React.JS",
			icon: (
				<FaReact
					size={30}
					style={{
						color: "#66dbfb",
					}}
				/>
			),
		},
		{
			name: "Next.JS",
			icon: (
				<TbBrandNextjs
					size={30}
					style={{
						color: "#000",
					}}
				/>
			),
		},
		{
			name: "Node.JS",
			icon: (
				<DiNodejs
					size={30}
					style={{
						color: "#86cf33",
					}}
				/>
			),
		},
		{
			name: "Nest.JS",
			icon: (
				<SiNestjs
					size={30}
					style={{
						color: "#e12a54",
					}}
				/>
			),
		},
		{
			name: "Express.JS",
			icon: (
				<SiExpress
					size={30}
					style={{
						color: "#f1c617",
					}}
				/>
			),
		},
		{
			name: "MySQL",
			icon: (
				<GrMysql
					size={30}
					style={{
						color: "#08668f",
					}}
				/>
			),
		},

		{
			name: "MongoDB",
			icon: (
				<SiMongodb
					size={30}
					style={{
						color: "#4b9f4b",
					}}
				/>
			),
		},
		{
			name: "Firebase",
			icon: (
				<SiFirebase
					size={30}
					style={{
						color: "#f58613",
					}}
				/>
			),
		},
		{
			name: "SupaBase",
			icon: (
				<RiSupabaseFill
					size={30}
					style={{
						color: "#2e9969",
					}}
				/>
			),
		},
	];
	return (
		<div
			id="skills"
			className="skills h-[80vh]   px-24 bigScreen:px-80  py-20 mobile:max-sm:px-5 mb-5 dark:bg-slate-800 bg-slate-200 justify-center flex flex-col"
		>
			<h3 className=" text-center font-bold text-[40px] text-themecolor ">
				Skills and Technologies
			</h3>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="show"
				className="grid w-full grid-cols-4 gap-4 py-20"
			>
				{skills.map((skill, i) => (
					<motion.div
						key={i}
						variants={gridVariants}
						className="flex  justify-center items-center shadow-md gap-2 p-4 flex-wrap rounded-md hover:scale-105 duration-300 dark:bg-transparent dark:border dark:border-themecolor bg-white "
					>
						{skill.icon}
						<p className="text-xs">{skill.name}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default SkillsSection;
