"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";
import SpinnerLoader from "./atoms/SpinnerLoader";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Gmarvis",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/samgmarvis",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sam_gmarvis",
      icon: Twitter,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields correctly",
      });
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_k0kw658",
        "template_3rvzfiq",
        form.current!,
        { publicKey: "vq3hgDoUtK5_tEs1Z" }
      );

      setStatus({
        type: "success",
        message: "Thank you for reaching out! I'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      form.current?.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Sorry, an error occurred while sending your message. Please try again! or contact me directly on linkedin.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in-up">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
            I&apos;m passionate about bringing innovative ideas to life through software development. 
            Let&apos;s discuss your vision and create something remarkable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 fade-in-up-3">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <p className="text-muted-foreground">
                Whether you&apos;re looking to enhance an existing project or build something 
                from scratch, I&apos;m always open to new challenges and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 border border-border rounded-lg">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">sgmarvis@gmail.com</span>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">Follow me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                      >
                        <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up-4">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-foreground text-background py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <SpinnerLoader />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;