export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sam Gmarvis Njong",
  "alternateName": "Sam Gmarvis",
  "description": "Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents. Expert in AI, full-stack development, and African tech ecosystem transformation.",
  "url": "https://samgmarvis.site",
  "image": "https://samgmarvis.site/profile_cicle.png",
  "sameAs": [
    "https://linkedin.com/in/sam-gmarvis",
    "https://github.com/gmarvis",
    "https://twitter.com/samgmarvis"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Deliveru AI",
      "description": "AI Solutions Company"
    },
    {
      "@type": "Organization",
      "name": "Nyota Talents",
      "description": "Tech Talent Company",
      "founder": {
        "@type": "Person",
        "name": "Sam Gmarvis Njong"
      }
    }
  ],
  "knowsAbout": [
    "Software Engineering",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Artificial Intelligence",
    "Entrepreneurship",
    "African Tech Ecosystem"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Educational Institution" // Replace with actual institution
  },
  "nationality": "Cameroon",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CM"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sam Gmarvis Portfolio",
  "url": "https://samgmarvis.site",
  "description": "Portfolio of Sam Gmarvis - Software Engineer at Deliveru AI, Co-Founder & CEO of Nyota Talents",
  "author": {
    "@type": "Person",
    "name": "Sam Gmarvis Njong"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://samgmarvis.site/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sam Gmarvis Software Development Services",
  "image": "https://samgmarvis.site/profile_cicle.png",
  "description": "Professional software development services specializing in AI solutions, full-stack development, and tech entrepreneurship.",
  "provider": {
    "@type": "Person",
    "name": "Sam Gmarvis Njong"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Stack Development",
          "description": "Complete web application development using modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Solutions Development",
          "description": "Custom AI solutions and integration services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tech Consulting",
          "description": "Strategic technology consulting for businesses and startups"
        }
      }
    ]
  }
};

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://samgmarvis.site"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Profile",
      "item": "https://samgmarvis.site/profile"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Connect",
      "item": "https://samgmarvis.site/connect"
    }
  ]
};