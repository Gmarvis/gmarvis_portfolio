import React from "react";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Link from "next/link";

const LinkItems = [
  {
    name: "About",
    path: "",
    icon: <FaHome size={30} />,
  },
  {
    name: "Skills",
    path: "#skills",
    icon: <GiSkills />,
  },
  {
    name: "Projects",
    path: "",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Contact",
    path: "",
    icon: <MdContactPhone />,
  },
];

export default function FloatingSideBar() {
  return (
    <div className="flex flex-col bg-[#f3f3f3]  p-4 shadow-md w-[4rem] gap-4 rounded-full justify-center items-center">
      {LinkItems.map((link, i) => (
        <Link
          href={link.path}
          key={i}
          className="shadow-md p-3 rounded-full text-themecolor"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
