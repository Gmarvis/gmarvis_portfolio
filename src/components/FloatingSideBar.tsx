import React from "react";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Link from "next/link";

const LinkItems = [
  {
    name: "About",
    path: "#about",
    icon: <FaHome />,
  },
  {
    name: "Skills",
    path: "#skills",
    icon: <GiSkills />,
  },
  {
    name: "Projects",
    path: "#projects",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Contact",
    path: "#contact",
    icon: <MdContactPhone />,
  },
];

export default function FloatingSideBar() {
  return (
    <div className="flex flex-col bg-[#f3f3f3]   p-4 shadow-md w-[4rem] mobile:max-sm:w-[100vw] mobile:max-sm:justify-between mobile:max-sm:flex-row  gap-4 mobile:max-sm:rounded-none mobile:max-sm:p-2 rounded-full justify-center items-center">
      {LinkItems.map((link, i) => (
        <Link
          href={link.path}
          key={i}
          className="flex flex-col justify-center items-center"
        >
          <div className="icon shadow-md p-3 rounded-full text-themecolor text-[18px]">
            {link.icon}
          </div>
          <span className="hidden mobile:max-sm:block text-xs">
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
