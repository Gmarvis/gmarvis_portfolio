"use client";

import React from "react";
import { Linkedin, Twitter, Github, QrCode, BookOpen, Mic, User, Briefcase } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

interface FloatingSideBarProps {
  socialLinks?: SocialLink[];
}

const FloatingSideBar = ({ socialLinks: cmsLinks }: FloatingSideBarProps) => {
  const getIconForPlatform = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      case 'github': return Github;
      default: return Github;
    }
  };

  const getColorForPlatform = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return "hover:text-blue-600";
      case 'twitter': return "hover:text-blue-400";
      case 'github': return "hover:text-gray-700 dark:hover:text-gray-300";
      default: return "hover:text-blue-500";
    }
  };

  // Default social links if no CMS data
  const defaultLinks = [
    {
      name: "QR Code",
      href: "/connect",
      icon: QrCode,
      color: "hover:text-blue-500",
    },
    {
      name: "Blog",
      href: "/blog",
      icon: BookOpen,
      color: "hover:text-green-500",
    },
    {
      name: "Talks",
      href: "/talks",
      icon: Mic,
      color: "hover:text-orange-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/samgmarvis/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/sam_gmarvis",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/gmarvis",
      icon: Github,
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
  ];

  // Create display links from CMS data or default
  const displayLinks = cmsLinks && cmsLinks.length > 0 ? [
    {
      name: "Profile",
      href: "/profile", 
      icon: User,
      color: "hover:text-purple-500",
    },
    {
      name: "QR Code",
      href: "/connect", 
      icon: QrCode,
      color: "hover:text-blue-500",
    },
    {
      name: "Blog",
      href: "/blog", 
      icon: BookOpen,
      color: "hover:text-green-500",
    },
    {
      name: "Talks",
      href: "/talks", 
      icon: Mic,
      color: "hover:text-orange-500",
    },
    ...cmsLinks.map(link => ({
      name: link.platform,
      href: link.url,
      icon: getIconForPlatform(link.platform),
      color: getColorForPlatform(link.platform),
    }))
  ] : defaultLinks;

  return (
    <div className="flex flex-col space-y-3">
      {displayLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`
              group relative p-3 rounded-xl bg-card border border-border 
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1
              ${link.color}
            `}
            aria-label={link.name}
          >
            <Icon className="h-5 w-5 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
            
            {/* Tooltip */}
            <span className="
              absolute right-full mr-3 top-1/2 -translate-y-1/2 
              px-2 py-1 bg-foreground text-background text-xs rounded-md
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              pointer-events-none whitespace-nowrap
              hidden lg:block
            ">
              {link.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default FloatingSideBar;
