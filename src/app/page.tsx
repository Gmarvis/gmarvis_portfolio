import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <NavBar />
      <div className="pt-[64px]">
        <div className="hero-section  w-full flex justify-center items-center gap-20  px-24 mobile:max-sm:px-5 py-10">
          <div className="bio w-[50%] mobile:max-sm:w-full justify-center mobile:max-sm:items-center mobile:max-sm:text-center  flex flex-col gap-2">
            <h1>Sam Gmarvis Njong</h1>
            <h2 className="text-[30px] font-bold text-themecolor">
              Front-end oriented Full-stack Web Developer
            </h2>
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
              <button className="text-[12px]">Download CV</button>
            </div>
          </div>
          <div className="image w-[50%] mobile:max-sm:hidden justify-end self-end flex">
            <Image
              src={"/profile_cicle.png"}
              alt=""
              width={500}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
