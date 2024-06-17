"use client"
import NavBar from "@/components/NavBar";

import FloatingSideBar from "@/components/FloatingSideBar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {

	return (
		<main className="min-h-screen scroll-smooth relative ">
			<NavBar />
			<div className="pt-[64px] mobile:max-sm:pb-[70px]">
				<HeroSection />
				<SkillsSection />
				<Projects />
			</div>
			<div className="sm:fixed top-[63vh] right-5 mobile:max-sm:right-0 mobile:max-sm:top-[60vh] mobile:max-sm:hidden
			">
				<FloatingSideBar />
			</div>
			<div className="bottom-0 left-0 mobile:max-sm:fixed sm:hidden
			">
				<FloatingSideBar />
			</div>
			<Contact />
		</main>
	);
}
