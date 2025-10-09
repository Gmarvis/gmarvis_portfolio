import type { Metadata } from "next";
import { Inter } from "next/font/google";
//@ts-ignore
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam Gmarvis | Full Stack Developer",
  description: "Minimalistic portfolio of Sam Gmarvis - Full Stack Web Developer specializing in modern web technologies and user-centric design.",
  keywords: ["Sam Gmarvis", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Sam Gmarvis Njong" }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
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
