"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Talks", href: "/talks" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    setMounted(true);
    
    // Add keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + T)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  // Use resolvedTheme to get the actual theme being used
  const isDark = mounted ? resolvedTheme === "dark" : false;

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/90 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="#about" 
              className="text-xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
            >
              SG
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/90 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="#about" 
            className="text-xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
          >
            SG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              // Special styling for Blog and Talks
              if (item.name === "Blog") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-sm font-medium text-green-600 hover:text-green-700 transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="absolute inset-0 bg-green-100 dark:bg-green-900/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                );
              }
              if (item.name === "Talks") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-sm font-medium text-orange-600 hover:text-orange-700 transition-all duration-300 group"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.name}
                      <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded-full">New</span>
                    </span>
                    <span className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </Link>
                );
              }
              // Regular styling for other links
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-md border border-border hover:border-foreground transition-all duration-200 group"
              aria-label="Toggle theme (Ctrl+Shift+T)"
              title="Toggle theme (Ctrl+Shift+T)"
            >
              {mounted ? (
                isDark ? (
                  <Sun className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                ) : (
                  <Moon className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {isDark ? 'Light mode' : 'Dark mode'}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md border border-border hover:border-foreground transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navigation.map((item) => {
              // Special styling for Blog and Talks in mobile
              if (item.name === "Blog") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 rounded-md mx-2"
                  >
                    <span>{item.name}</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </Link>
                );
              }
              if (item.name === "Talks") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-200 rounded-md mx-2"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded-full">New</span>
                  </Link>
                );
              }
              // Regular styling for other links
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-l-2 hover:border-foreground transition-all duration-200"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;