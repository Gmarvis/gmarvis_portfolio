import NavBar from "@/components/NavBar";
import FloatingSideBar from "@/components/FloatingSideBar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { getLandingPageData } from "@/lib/sanity/utils-simple";

export default async function Home() {
  // Fetch all landing page data from Sanity CMS
  const data = await getLandingPageData(true);
  
  console.log('Full data from CMS:', data);
  console.log('Experience data specifically:', data.experience);

  const {
    siteSettings,
    heroSection,
    skills,
    experience,
    projects,
  } = data;
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <NavBar />
      
      {/* Main Content */}
      <div className="pt-16">
        <HeroSection data={heroSection} />
        <SkillsSection data={skills} />
        <ExperienceSection data={experience} />
        <Projects data={projects} />
        <Contact data={null} />
      </div>

      {/* Floating Social Links - Desktop */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden lg:block">
        <FloatingSideBar socialLinks={[]} />
      </div>

      {/* Floating Social Links - Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <FloatingSideBar socialLinks={[]} />
      </div>
    </main>
  );
}
