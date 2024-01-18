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
import { BiDownload } from "react-icons/bi";
import FloatingSideBar from "@/components/FloatingSideBar";
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
      <div className="pt-[64px]">
        <div className="hero-section  w-full flex justify-center items-center gap-20  px-24 mobile:max-sm:px-5 py-10">
          <div className="bio w-[50%] mobile:max-sm:w-full justify-center mobile:max-sm:items-center mobile:max-sm:text-center  flex flex-col gap-2">
            <h1>Sam Gmarvis Njong</h1>
            <h2 className="text-[30px] font-bold text-themecolor">
              Frontend Web Developer
            </h2>
            <div className="border-r-4 border-r-themecolor border-b-4 hidden rounded-[5px] mobile:max-sm:block border-b-themecolor ">
              <Image
                src={"/profile_cicle.png"}
                alt=""
                width={400}
                height={300}
                className="rounded-[5px] hidden mobile:max-sm:block z-0"
              />
            </div>

            <p>
              Beyond technical proficiency, I bring a strong sense of empathy
              and user-centricity to my work. I believe that understanding the
              needs and aspirations of users is paramount to creating truly
              impact digital experiences. By immersing myself in their
              perspectives, I can design and develop solutions that not only
              function seamlessly but also resonate with their emotions and
              aspirations.
            </p>
            <div className="actionBtns flex gap-5">
              <Link className="bg-themecolor px-4 py-2 text-white" href={""}>
                Hire Me
              </Link>
              <button className="text-[12px] flex justify-center items-center gap-2 shadow-md p-2">
                <BiDownload />
                Download CV
              </button>
            </div>
          </div>
          <div className="image w-[50%] mobile:max-sm:hidden justify-end self-end flex  ">
            <Image
              src={"/profile_cicle.png"}
              alt=""
              width={400}
              height={300}
              className="rounded-[5px] border-r-4 border-r-themecolor border-b-4 border-b-themecolor"
            />
          </div>
        </div>
        <div id="skills" className="skills px-24 mobile:max-sm:px-5 mb-5">
          <h3>Skills and Technologies</h3>
          <div className="grid w-full grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex  justify-center items-center shadow-md gap-2 p-4 flex-wrap "
              >
                {skill.icon}
                <p className="text-xs">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="projects px-24 mobile:max-sm:px-5">
          <h3>Projects</h3>
        </div>
      </div>
      <div className="fixed top-[30vh] right-5">
        <FloatingSideBar />
      </div>
    </main>
  );
}
