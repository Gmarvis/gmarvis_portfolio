"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Download, ArrowRight } from "lucide-react";
import { imageLinks } from "../lib/images";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight fade-in-up-1">
                Sam Gmarvis
              </h1>

              <h2 className="text-xl lg:text-2xl text-muted-foreground fade-in-up-3">
                Software Engineer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl fade-in-up-4">
              I bring empathy and user-centricity to every project, creating
              digital experiences that not only function seamlessly but resonate
              with emotions and aspirations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up-5">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in-up-3">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src={imageLinks.profilePicture}
                alt="Sam Gmarvis Njong"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
