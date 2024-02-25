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
    icon: <CiLinkedin />,
  },
  {
    name: "twitter",
    path: "https://twitter.com/sam_gmarvis",
    icon: <SlSocialTwitter />,
  },
  {
    name: "Gidhub",
    path: "https://github.com/gmarvis",
    icon: <TbBrandGithub />,
  },
];

export default function FloatingSideBar() {
  return (
    <div className="flex flex-col  p-4  w-[4rem]   gap-2 rounded-full justify-center items-center">
      {LinkItems.map((link, i) => (
        <Link
          href={link.path}
          target="_blank"
          key={i}
          className="flex flex-col justify-center items-center "
        >
          <div className="icon shadow-md p-3 rounded-full bg-white text-themecolor text-[18px] border">
            {link.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
