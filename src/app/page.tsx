// "use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

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
import FloatingSideBar from "@/components/FloatingSideBar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
export default function Home() {
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

  // console.log(skills.length);

  return (
    <main className="min-h-screen scroll-smooth relative">
      <NavBar />
      <div className="pt-[64px] mobile:max-sm:pb-[70px]">
        <HeroSection />
        <div
          id="skills"
          className="skills px-24 bigScreen:px-80  py-20 mobile:max-sm:px-5 mb-5 bg-slate-200"
        >
          <h3 className=" text-center font-bold text-[40px] text-themecolor ">
            Skills and Technologies
          </h3>
          <div className="grid w-full grid-cols-4 gap-4 py-20">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex  justify-center items-center shadow-md gap-2 p-4 flex-wrap rounded-md hover:scale-110 duration-300 bg-white "
              >
                {skill.icon}
                <p className="text-xs">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="projects"
          className="projects px-24 py-20 mobile:max-sm:px-5 w-full"
        >
          <h3 className="text-center font-bold text-[40px] text-themecolor">
            My Projects
          </h3>
          <div className="flex justify-center items-center self-center py-20 w-full">
            <Projects />
          </div>
        </div>
      </div>
      <div className="fixed top-[63vh] left-5 mobile:max-sm:left-1 mobile:max-sm:top-[70vh]">
        <FloatingSideBar />
      </div>

      <div
        id="contact"
        className="contact px-24 py-10 mobile:max-sm:px-5 w-full bg-slate-200"
      >
        <Contact />
      </div>
    </main>
  );
}
