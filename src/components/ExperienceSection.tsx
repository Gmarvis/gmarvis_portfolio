"use client";

import React from "react";
import { experienceData } from "../../data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
            My journey as a developer, building scalable applications and delivering impactful solutions
          </p>
        </div>

        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="group p-6 rounded-xl border border-border bg-card backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-base lg:text-sm text-foreground mb-1">
                      {experience.position}
                    </h3>
                    <h4 className="text-base font-semibold text-primary mb-1">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>
                  <div className="mt-3 lg:mt-0">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {experience.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {experience.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="flex items-start space-x-2 text-muted-foreground text-sm"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-xs font-semibold text-foreground mb-2">
                    Technologies & Tools:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-background/60 hover:bg-background rounded-md border border-border/50 hover:border-border text-xs font-medium text-foreground transition-all duration-300 hover:shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;