import type { Metadata } from "next";
import { Inter } from "next/font/google";
//@ts-ignore
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { personStructuredData, websiteStructuredData, professionalServiceStructuredData } from "@/lib/structured-data";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sam Gmarvis | Software Engineer & Tech Entrepreneur",
    template: "%s | Sam Gmarvis"
  },
  description: "Sam Gmarvis - Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Expert in AI, full-stack development, and African tech ecosystem transformation. Building innovative solutions with React, Next.js, and TypeScript.",
  keywords: [
    "Sam Gmarvis", 
    "Software Engineer", 
    "Tech Entrepreneur", 
    "Deliveru AI", 
    "Nyota Talents", 
    "Full Stack Developer", 
    "React Developer", 
    "Next.js Expert", 
    "TypeScript Developer", 
    "AI Solutions", 
    "African Tech", 
    "Startup Founder", 
    "Web Development", 
    "Frontend Developer", 
    "Backend Developer"
  ],
  authors: [{ name: "Sam Gmarvis Njong", url: "https://samgmarvis.site" }],
  creator: "Sam Gmarvis Njong",
  publisher: "Sam Gmarvis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://samgmarvis.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samgmarvis.site',
    siteName: 'Sam Gmarvis Portfolio',
    title: 'Sam Gmarvis | Software Engineer & Tech Entrepreneur',
    description: 'Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Expert in AI, full-stack development, and African tech ecosystem transformation.',
    images: [
      {
        url: '/profile_cicle.png',
        width: 1200,
        height: 630,
        alt: 'Sam Gmarvis - Software Engineer & Tech Entrepreneur',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sam Gmarvis | Software Engineer & Tech Entrepreneur',
    description: 'Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Expert in AI, full-stack development, and African tech ecosystem transformation.',
    creator: '@samgmarvis',
    images: ['/profile_cicle.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceStructuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
