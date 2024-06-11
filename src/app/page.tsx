"use client";
import NavBar from "@/components/NavBar";

import FloatingSideBar from "@/components/FloatingSideBar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {
	// console.log(skills.length);

	return (
		<main className="min-h-screen scroll-smooth relative">
			<NavBar />
			<div className="pt-[64px] mobile:max-sm:pb-[70px]">
				<HeroSection />
				<SkillsSection />

				<div
					id="projects"
					className="projects px-24 py-20 mobile:max-sm:px-5 w-full"
				>
					<h3 className="text-center font-bold text-[40px] text-themecolor">
						My Projects
					</h3>
					<Projects />
				</div>
			</div>
			<div className="fixed top-[63vh] right-5 mobile:max-sm:right-1 mobile:max-sm:top-[70vh]">
				<FloatingSideBar />
			</div>

			<div id="contact" className="contact ">
				<Contact />
			</div>
		</main>
	);
}
