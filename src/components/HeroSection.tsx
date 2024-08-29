"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { BiDownload } from "react-icons/bi";

const HeroSection = () => {
	return (
		<div
		id="about"
		className="hero-section sm:h-[80vh] shadow-md  dark:bg-slate-900 w-full flex justify-center items-center gap-20  px-24 bigScreen:px-80 mobile:max-sm:px-5 mt-2 py-10">
			<div
				
				className="bio  w-[50%] mobile:max-md:w-full justify-center mobile:max-md:items-center mobile:max-md:text-center  flex flex-col gap-2"
			>
				<h1 className="name">Sam Gmarvis Njong</h1>
				<h2 className="heading overflow-hidden w-full mobile:max-sm:text-2xl text-[40px] font-bold themecolor bg-gradient-to-r from-themecolor to-slate-400 bg-clip-text text-transparent">
					Frontend Oriented Fullstack Developer
				</h2>
				<div
				
					className="border-r-4 border-r-themecolor border-b-4 hidden rounded-md mobile:max-md:block border-b-themecolor "
				>
					<Image
						src={"/profile_cicle.png"}
						alt=""
						width={400}
						height={300}
						className=" image rounded-md hidden mobile:max-sm:block z-0  duration-300"
					/>
				</div>

				<p className="description mobile:max-sm:pt-3 text-gray-700 dark:text-slate-400">
					Beyond technical proficiency, I bring a strong sense of empathy and
					user-centricity to my work. I believe that understanding the needs and
					aspirations of users is paramount to creating truly impact digital
					experiences. By immersing myself in their perspectives, I can design
					and develop solutions that not only function seamlessly but also
					resonate with their emotions and aspirations.
				</p>
				<div className="actionBtns flex gap-5 pt-5">
					<Link
						className="CTA bg-themecolor px-4 py-2 text-white rounded-md"
						href={"#contact"}
					>
						Get In Touch
					</Link>
					<Link
						href={"/SamGmarvisCV.pdf"}
						target="_blank"
					>
						<button className="CTA text-[12px] flex justify-center items-center gap-2 shadow-md dark:border dark:border-themecolor rounded-md text-themecolor hover:bg-themecolor hover:text-white duration-300 p-2">
							<BiDownload />
							Download CV
						</button>
					</Link>
				</div>
			</div>
			<div className="image w-[50%] mobile:max-md:hidden justify-center items-center self-end flex flex-col   h-full">
			<div className="image w-[100%] mobile:max-md:hidden justify-end self-end flex  ">

				<Image
					src={"/profile_cicle.png"}
					alt=""
					width={400}
					height={300}
					className="image border-r-4 border-r-themecolor border-b-4 border-b-themecolor  rounded-md duration-300"
				/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
