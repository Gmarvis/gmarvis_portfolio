// Simple GROQ queries for the current schema

// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    siteTitle,
    siteDescription,
    authorName,
    authorEmail
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

// Skills
export const skillsQuery = `
  *[_type == "skill"] | order(category asc, name asc) {
    _id,
    name,
    category,
    proficiencyLevel,
    icon
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
    technologies,
    achievements
  }
`

// Projects
export const projectsQuery = `
  *[_type == "project"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    featured
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
    publishedAt,
    tags
  }
`

// Single Blog Post
export const blogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    excerpt,
    featuredImage,
    publishedAt,
    tags
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
    eventUrl,
    date,
    slidesUrl,
    videoUrl,
    coverImage
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
    eventUrl,
    date,
    slidesUrl,
    videoUrl,
    coverImage
  }
`