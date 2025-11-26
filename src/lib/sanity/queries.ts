// GROQ queries for fetching data from Sanity

// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    siteTitle,
    siteDescription,
    favicon,
    ogImage,
    themeColors,
    googleAnalyticsId
  }
`

// Hero Section
export const heroSectionQuery = `
  *[_type == "heroSection"][0] {
    _id,
    greeting,
    name,
    title,
    description,
    profileImage,
    resumeUrl
  }
`

// About Section
export const aboutSectionQuery = `
  *[_type == "aboutSection"][0] {
    _id,
    title,
    content,
    profileImage,
    location,
    currentRole,
    yearsOfExperience,
    highlights[]
  }
`

// Skills Section
export const skillsSectionQuery = `
  *[_type == "skillsSection"][0] {
    _id,
    title,
    description,
    displayStyle
  }
`

// All Skills grouped by category
export const skillsQuery = `
  *[_type == "skill"] | order(category asc, name asc) {
    _id,
    name,
    category,
    proficiencyLevel,
    icon,
    description
  }
`

// Experience
export const experienceQuery = `
  *[_type == "experience"] | order(startDate desc) {
    _id,
    jobTitle,
    company,
    companyLogo,
    location,
    startDate,
    endDate,
    current,
    description,
    technologies[],
    achievements[]
  }
`

// Projects
export const projectsQuery = `
  *[_type == "project"] | order(featured desc, _createdAt desc) {
    _id,
    name,
    shortTitle,
    description,
    fullDescription,
    images[],
    featuredImage,
    technologies[],
    liveUrl,
    githubUrl,
    demoCredentials {
      email,
      password
    },
    featured,
    status,
    category
  }
`

// Featured Projects
export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    shortTitle,
    description,
    featuredImage,
    technologies[],
    liveUrl,
    githubUrl,
    category
  }
`

// Contact Info
export const contactInfoQuery = `
  *[_type == "contactInfo"][0] {
    _id,
    name,
    displayName,
    title,
    email,
    phone,
    location,
    availability {
      status,
      message
    },
    contactMessage,
    socialLinks[] {
      platform,
      url,
      icon
    },
    resumeFile
  }
`

// Blog Posts
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author-> {
      name,
      avatar
    },
    categories[]-> {
      name,
      slug,
      color
    },
    tags[],
    publishedAt,
    featured
  }
`

// Single Blog Post
export const blogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    author-> {
      name,
      bio,
      avatar,
      socialLinks[]
    },
    categories[]-> {
      name,
      slug,
      color
    },
    tags[],
    publishedAt,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`

// Blog Categories
export const blogCategoriesQuery = `
  *[_type == "blogCategory"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    color,
    icon,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }
`

// Talks
export const talksQuery = `
  *[_type == "talk"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    event,
    eventLogo,
    date,
    location,
    type,
    slides,
    recording,
    photos[],
    resources[],
    featured
  }
`

// Single Talk
export const talkQuery = `
  *[_type == "talk" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    event,
    eventLogo,
    date,
    location,
    type,
    slides,
    recording,
    photos[],
    resources[] {
      title,
      url,
      type
    },
    featured
  }
`

// Speaking Topics
export const speakingTopicsQuery = `
  *[_type == "speakingTopic"] | order(name asc) {
    _id,
    name,
    description,
    icon,
    category
  }
`