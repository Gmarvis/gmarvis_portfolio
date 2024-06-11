"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const LinkItems = [
	{
		name: "About",
		path: "#about",
	},
	{
		name: "Skills",
		path: "#skills",
	},
	{
		name: "Projects",
		path: "#projects",
	},
	{
		name: "Contact",
		path: "#contact",
	},
];

const NavBar = () => {
	const [openMobileNav, setOpenMobileNav] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	return (
		<div className="w-full px-24 bigScreen:px-80  fixed z-40 bg-white dark:bg-slate-800 mobile:max-sm:px-5 shadow-md flex justify-between  items-center py-5">
			<h3 className="font-bold text-24 text-themecolor text-[18px]">
				PORTFOLIO
			</h3>

			<div className="navItems flex gap-3 mobile:max-sm:hidden text-sm font-semibold">
				{LinkItems.map((link, i) => (
					<Link
						key={i}
						href={link.path}
						className="hover:text-themecolor delay-300"
					>
						{link.name}
					</Link>
				))}
			</div>

			<button
				onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
				className="dark:text-white  text-slate-800"
			>
				<MdLightMode className=" hidden dark:block" size={20} />
				<MdDarkMode size={20} className="block dark:hidden" />
			</button>
		</div>
	);
};

export default NavBar;
