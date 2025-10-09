"use client";

import React from "react";
import { Award, TrendingUp, Users, Globe } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "Founded Nyota Talents",
    description: "Built Africa's leading tech career platform serving 500+ professionals",
    metric: "500+ Talents Connected"
  },
  {
    icon: Globe,
    title: "International Recognition",
    description: "Software Developer at leading German AI company Deliveru",
    metric: "Global Impact"
  },
  {
    icon: Users,
    title: "Community Leadership",
    description: "Leading digital transformation initiatives across African tech ecosystem",
    metric: "15+ Countries Reached"
  },
  {
    icon: Award,
    title: "Technical Certifications",
    description: "AI Essentials & JavaScript expertise with focus on emerging technologies",
    metric: "Continuous Learning"
  }
];

const stats = [
  { number: "500+", label: "Professionals Mentored" },
  { number: "10K+", label: "Daily Active Users" },
  { number: "15+", label: "Countries Served" },
  { number: "90%+", label: "Client Success Rate" }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up">
            Impact & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
            Measurable results from building scalable solutions and leading transformative initiatives across the tech industry
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {achievement.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                      {achievement.metric}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;