"use client";

import NavBar from "@/components/NavBar";
import FloatingSideBar from "@/components/FloatingSideBar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <NavBar />
      
      {/* Main Content */}
      <div className="pt-16">
        <HeroSection />
        <SkillsSection />
        <Projects />
        <Contact />
      </div>

      {/* Floating Social Links - Desktop */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden lg:block">
        <FloatingSideBar />
      </div>

      {/* Floating Social Links - Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <FloatingSideBar />
      </div>
    </main>
  );
}
