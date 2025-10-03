"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projectData } from "../../data";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
            A showcase of my recent work in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={project.name}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:border hover:border-border transition-colors"
                      aria-label={`View ${project.name} live`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-border text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Credentials (if available) */}
                {project.demo && (
                  <div className="p-3 border border-border rounded-lg text-xs">
                    <p className="font-medium mb-1">Demo Credentials:</p>
                    <p>Email: {project.demo.email}</p>
                    <p>Password: {project.demo.password}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA for more projects */}
        <div className="text-center mt-12 fade-in-up-5">
          <Link
            href="https://github.com/gmarvis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:border-foreground transition-colors group"
          >
            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
