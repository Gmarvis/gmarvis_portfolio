"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// const LinkItems = [
//   {
//     name: "About",
//     path: "",
//   },
//   {
//     name: "Skills",
//     path: "#skills",
//   },
//   {
//     name: "Projects",
//     path: "",
//   },
//   {
//     name: "Contact",
//     path: "",
//   },
// ];

const NavBar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <div className="w-full px-24 fixed z-40 bg-white mobile:max-sm:px-5 shadow-md flex justify-between  items-center py-5">
      <h3 className="font-bold text-24 text-themecolor text-[18px]">
        PORTFOLIO
      </h3>

      {/* <div className="navItems flex gap-3 mobile:max-sm:hidden text-xs">
        {LinkItems.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className="hover:text-themecolor delay-300"
          >
            {link.name}
          </Link>
        ))}
      </div> */}

      <button>
        <MdLightMode size={20} />
      </button>
    </div>
  );
};

export default NavBar;
