// SEO configuration constants
export const seoConfig = {
  defaultTitle: "Sam Gmarvis | Software Engineer & Tech Entrepreneur",
  titleTemplate: "%s | Sam Gmarvis",
  defaultDescription: "Sam Gmarvis - Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Expert in AI, full-stack development, and African tech ecosystem transformation.",
  siteUrl: "https://samgmarvis.site",
  siteName: "Sam Gmarvis Portfolio",
  twitterHandle: "@samgmarvis",
  linkedinProfile: "https://linkedin.com/in/sam-gmarvis",
  githubProfile: "https://github.com/gmarvis",
  profileImage: "/profile_cicle.png",
  keywords: [
    "Sam Gmarvis",
    "Software Engineer", 
    "Tech Entrepreneur",
    "Deliveru AI",
    "Nyota Talents",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "AI Solutions",
    "African Tech",
    "Startup Founder",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Tech Consulting",
    "Innovation",
    "Digital Transformation"
  ],
  locale: "en_US",
  type: "website",
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    path: "/",
  },
  profile: {
    title: "Professional Profile",
    description: "Professional profile of Sam Gmarvis - Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Connect with me on social media platforms.",
    path: "/profile",
  },
  connect: {
    title: "Connect via QR Code",
    description: "Connect with Sam Gmarvis using QR code. Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Quick access to profile and contact information.",
    path: "/connect",
  },
};

// Generate Open Graph and Twitter metadata
export function generateSEOMetadata(pageConfig: typeof pageConfigs.home) {
  return {
    title: pageConfig.title === seoConfig.defaultTitle ? pageConfig.title : `${pageConfig.title} | Sam Gmarvis`,
    description: pageConfig.description,
    keywords: seoConfig.keywords,
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${seoConfig.siteUrl}${pageConfig.path}`,
      siteName: seoConfig.siteName,
      images: [
        {
          url: seoConfig.profileImage,
          width: 1200,
          height: 630,
          alt: pageConfig.title,
        }
      ],
      locale: seoConfig.locale,
      type: seoConfig.type as "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageConfig.title,
      description: pageConfig.description,
      creator: seoConfig.twitterHandle,
      images: [seoConfig.profileImage],
    },
    alternates: {
      canonical: pageConfig.path,
    },
  };
}