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
import Projects from "@/components/Projects";
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
        <div className="hero-section  w-full flex justify-center items-center gap-20  px-24 bigScreen:px-80 mobile:max-sm:px-5 py-10">
          <div
            id="about"
            className="bio w-[50%] mobile:max-sm:w-full justify-center mobile:max-sm:items-center mobile:max-sm:text-center  flex flex-col gap-2"
          >
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
            <div className="actionBtns flex gap-5 pt-5">
              <Link
                className="bg-themecolor px-4 py-2 text-white"
                href={"#contact"}
              >
                Hire Me
              </Link>
              <Link
                href={"/SamGmarvisCV.pdf"}
                download={"Sam Gmarvis DevelopersCV.pdf"}
                target="_blank"
              >
                <button className="text-[12px] flex justify-center items-center gap-2 shadow-md text-themecolor hover:bg-slate-400 hover:text-white duration-300 p-2">
                  <BiDownload />
                  Download CV
                </button>
              </Link>
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
      <div className="fixed top-[30vh] right-5 mobile:max-sm:hidden">
        <FloatingSideBar />
      </div>
      <div className="fixed bottom-0 hidden mobile:max-sm:block">
        <FloatingSideBar />
      </div>
      <div
        id="contact"
        className="contact px-24  mobile:max-sm:px-5 w-full bg-slate-200"
      >
        <h3 className="text-center font-bold text-[40px] text-themecolor">
          Contact Me
        </h3>
      </div>
    </main>
  );
}
