"use client";

import React from "react";
import Image from "next/image";
import type { Experience } from "@/lib/sanity/types";
import { PortableText } from '@portabletext/react';
import { urlFor } from "@/lib/sanity/image";



interface ExperienceSectionProps {
  data?: Experience[] | null;
}

const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  console.log('Experience data received:', data);
  console.log('Data type:', typeof data);
  console.log('Is array:', Array.isArray(data));
  console.log('Length:', data?.length);
  
  // Only show section if we have CMS data
  if (!data || data.length === 0) {
    console.log('Hiding experience section - no data');
    return null;
  }
  
  console.log('Showing experience section with', data.length, 'items');
  
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
          {data.map((experience: any, index: number) => {
            // Handle date parsing with error handling
            let startDate, endDate;
            try {
              startDate = new Date(experience.startDate);
              endDate = experience.endDate ? new Date(experience.endDate) : null;
            } catch (error) {
              console.error('Date parsing error:', error);
              startDate = new Date();
              endDate = null;
            }
            
            const formatDate = (date: Date) => {
              try {
                return date.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short' 
                });
              } catch (error) {
                return 'Invalid Date';
              }
            };

            // Use jobTitle field (matches CMS schema)
            const jobTitle = experience.jobTitle;
            const description = experience.description;

            return (
              <div
                key={experience._id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="group p-6 rounded-xl border border-border bg-card backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Company Logo */}
                      {experience.companyLogo && (
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg overflow-hidden border border-border bg-background/50">
                            <Image
                              src={urlFor(experience.companyLogo).width(48).height(48).url()}
                              alt={`${experience.company} logo`}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {jobTitle}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <span className="font-medium text-primary">{experience.company}</span>
                          {experience.location && (
                            <>
                              <span>•</span>
                              <span>{experience.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground lg:text-right">
                      <span>{formatDate(startDate)}</span>
                      <span>-</span>
                      <span>{experience.current ? 'Present' : (endDate ? formatDate(endDate) : 'Present')}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <div className="text-muted-foreground leading-relaxed">
                      {Array.isArray(description) ? (
                        <PortableText value={description} />
                      ) : (
                        <p>{description}</p>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement: string, idx: number) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {experience.technologies && experience.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;