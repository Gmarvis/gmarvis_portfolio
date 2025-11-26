"use client";

import React from "react";
import type { Skill } from "@/lib/sanity/types";

interface SkillsSectionProps {
  data: Skill[] | null;
}

const SkillsSection = ({ data }: SkillsSectionProps) => {
  // Group skills by category
  const groupedSkills = data?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>) || {};

  // Fallback data if CMS is not available
  const frontendSkills = [
    "JavaScript", 
    "TypeScript",
    "React.js",
    "Next.js",
  ];

  const backendSkills = [
    "Node.js",
    "NestJS", 
    "Express",
    "REST APIs",
    "GraphQL"
  ];

  const databaseSkills = [
    "MySQL",
    "MongoDB", 
    "PostgreSQL",
    "Firebase",
    "Supabase"
  ];

  const toolsSkills = [
    "Git",
    "Docker", 
    "AWS",
    "Vercel",
    "Socket.io",
    "Redis"
  ];

  // Use CMS data if available, otherwise use fallback
  const skillCategories = Object.keys(groupedSkills).length > 0 ? 
    Object.entries(groupedSkills).map(([category, categorySkills]) => ({
      title: category.charAt(0).toUpperCase() + category.slice(1),
      skills: categorySkills
    })) : [
      { title: "Frontend", skills: frontendSkills.map(name => ({ name, proficiencyLevel: 8 })) },
      { title: "Backend", skills: backendSkills.map(name => ({ name, proficiencyLevel: 7 })) },
      { title: "Database", skills: databaseSkills.map(name => ({ name, proficiencyLevel: 7 })) },
      { title: "Tools & DevOps", skills: toolsSkills.map(name => ({ name, proficiencyLevel: 6 })) }
    ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    
                    return (
                      <div
                        key={skillName}
                        className="group p-3 bg-background/60 hover:bg-accent rounded-lg border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm"
                        style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                      >
                        <span className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                          {skillName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Statement */}
        <div className="mt-16 text-center fade-in-up-5">
          <div className="max-w-3xl mx-auto p-6 bg-card border border-border rounded-2xl">
            <p className="text-muted-foreground">
              With expertise spanning the full development stack, I create seamless experiences 
              from responsive frontends to robust backend systems, always focusing on clean code 
              and optimal performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;