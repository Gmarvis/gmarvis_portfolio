"use client";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import Link from "next/link";

const LinkItems = [
	{
		name: "linkedin",
		path: "https://www.linkedin.com/in/samgmarvis/",
		icon: <CiLinkedin size={24} />,
	},
	{
		name: "twitter",
		path: "https://twitter.com/sam_gmarvis",
		icon: <SlSocialTwitter size={24} />,
	},
	{
		name: "Gidhub",
		path: "https://github.com/gmarvis",
		icon: <TbBrandGithub size={24} />,
	},
];

export default function FloatingSideBar() {
	return (
		<div className="flex flex-col  p-6  w-[6rem]   gap-2 rounded-full justify-center items-center">
			{LinkItems.map((link, i) => (
				<Link
					href={link.path}
					target="_blank"
					key={i}
					className="flex flex-col justify-center items-center hover:scale-110 duration-300 "
				>
					<div className="icon shadow-md p-4 rounded-full dark:bg-slate-900 dark:border-none bg-white text-themecolor text-[18px] border">
						{link.icon}
					</div>
				</Link>
			))}
		</div>
	);
}
