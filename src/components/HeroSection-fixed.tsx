"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Download, ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from '@portabletext/react';
import type { HeroSection as HeroSectionType } from "@/lib/sanity/types";

interface HeroSectionProps {
  data: HeroSectionType | null;
}

const HeroSection = ({ data }: HeroSectionProps) => {
  // Fallback data if CMS data is not available
  const fallbackData = {
    greeting: "Hi, I'm",
    name: "Samuel Gmarvis",
    title: "Full Stack Developer",
    description: "Building scalable web applications with modern technologies.",
  };

  const heroData = data || fallbackData;
  
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              {heroData.greeting && (
                <p className="text-lg text-primary font-medium fade-in-up-1">
                  {heroData.greeting}
                </p>
              )}
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight fade-in-up-2">
                {heroData.name}
              </h1>

              {heroData.title && (
                <h2 className="text-xl lg:text-2xl text-muted-foreground fade-in-up-3">
                  {heroData.title}
                </h2>
              )}
            </div>

            {heroData.description && (
              <div className="text-lg text-muted-foreground leading-relaxed max-w-xl fade-in-up-4">
                {Array.isArray(heroData.description) ? (
                  <PortableText value={heroData.description} />
                ) : (
                  <p>{heroData.description}</p>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up-5">
              {data?.resumeUrl && (
                <Link
                  href={data.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors group"
                >
                  Download Resume
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Link>
              )}
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-border hover:bg-accent transition-colors group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          {data?.profileImage && (
            <div className="relative fade-in-up lg:fade-in-right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform rotate-6"></div>
                <Image
                  src={urlFor(data.profileImage).width(500).height(600).url()}
                  alt="Profile"
                  width={500}
                  height={600}
                  className="relative z-10 w-full rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;