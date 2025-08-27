"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import QRCode from "qrcode"

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
	if (canvasRef.current) {
	  // Generate QR code that points to the profile page
	  const profileUrl = `${window.location.origin}/profile`
	  QRCode.toCanvas(canvasRef.current, profileUrl, {
		width: 280,
		margin: 2,
		color: {
		  dark: "#000000",
		  light: "#FFFFFF",
		},
	  })
	}
  }, [])

  return (
	<div className="min-h-screen bg-background flex items-center justify-center p-4">
	  <Card className="w-full max-w-sm p-8 text-center">
		<div className="space-y-6">
		  <div>
			<h1 className="text-2xl font-semibold text-foreground mb-2">Connect with Me</h1>
			<p className="text-muted-foreground text-sm">Scan the QR code to access my social profiles</p>
		  </div>

		  <div className="flex justify-center">
			<div className="p-4 bg-white rounded-lg shadow-sm">
			  <canvas ref={canvasRef} className="max-w-full h-auto" />
			</div>
		  </div>

		  <p className="text-xs text-muted-foreground">Point your camera at the QR code to get started</p>
		</div>
	  </Card>
	</div>
  )
}



// "use client"
// import NavBar from "@/components/NavBar";

// import FloatingSideBar from "@/components/FloatingSideBar";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import HeroSection from "@/components/HeroSection";
// import SkillsSection from "@/components/SkillsSection";
// export default function Home() {

// 	return (
// 		<main className="min-h-screen scroll-smooth relative ">
// 			<NavBar />
// 			<div className="pt-[64px] mobile:max-sm:pb-[70px]">
// 				<HeroSection />
// 				<SkillsSection />
// 				<Projects />
// 			</div>
// 			<div className="sm:fixed top-[63vh] right-5 mobile:max-sm:right-0 mobile:max-sm:top-[60vh] mobile:max-sm:hidden
// 			">
// 				<FloatingSideBar />
// 			</div>
// 			<div className="bottom-0 left-0 mobile:max-sm:fixed sm:hidden
// 			">
// 				<FloatingSideBar />
// 			</div>
// 			<Contact />
// 		</main>
// 	);
// }
