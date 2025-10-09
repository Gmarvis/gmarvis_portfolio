import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Connect | Sam Gmarvis",
  description: "Connect with Sam Gmarvis using QR code. Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Quick access to profile and contact information.",
  keywords: ["Sam Gmarvis QR code", "connect", "quick contact", "digital business card"],
  openGraph: {
    title: "Connect with Sam Gmarvis",
    description: "Connect with Sam Gmarvis using QR code. Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents.",
    url: "https://samgmarvis.site/connect",
    images: [
      {
        url: "/profile_cicle.png",
        width: 400,
        height: 400,
        alt: "Sam Gmarvis QR Connect",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Connect with Sam Gmarvis",
    description: "Connect with Sam Gmarvis using QR code. Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents.",
    images: ["/profile_cicle.png"],
  },
  alternates: {
    canonical: "/connect",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}