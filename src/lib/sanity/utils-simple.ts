import { client, serverClient } from './client'
import {
  siteSettingsQuery,
  heroSectionQuery,
  skillsQuery,
  experienceQuery,
  projectsQuery,
  blogPostsQuery,
  blogPostQuery,
  talksQuery,
  talkQuery,
} from './queries-simple'

// Use server client for SSG/SSR, regular client for client-side
const getClient = (useServerClient = false) => 
  useServerClient ? serverClient : client

// Site Settings
export async function getSiteSettings(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(siteSettingsQuery)
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

// Hero Section
export async function getHeroSection(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(heroSectionQuery)
  } catch (error) {
    console.error('Error fetching hero section:', error)
    return null
  }
}

// Skills
export async function getSkills(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(skillsQuery)
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

// Experience
export async function getExperience(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(experienceQuery)
  } catch (error) {
    console.error('Error fetching experience:', error)
    return []
  }
}

// Projects
export async function getProjects(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(projectsQuery)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Blog Posts
export async function getBlogPosts(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(blogPostsQuery)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Single Blog Post
export async function getBlogPost(slug: string, useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(blogPostQuery, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Talks
export async function getTalks(useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(talksQuery)
  } catch (error) {
    console.error('Error fetching talks:', error)
    return []
  }
}

// Single Talk
export async function getTalk(slug: string, useServerClient = false) {
  try {
    return await getClient(useServerClient).fetch(talkQuery, { slug })
  } catch (error) {
    console.error('Error fetching talk:', error)
    return null
  }
}

// Get all landing page data
export async function getLandingPageData(useServerClient = false) {
  try {
    const [
      siteSettings,
      heroSection,
      skills,
      experience,
      projects,
    ] = await Promise.all([
      getSiteSettings(useServerClient),
      getHeroSection(useServerClient),
      getSkills(useServerClient),
      getExperience(useServerClient),
      getProjects(useServerClient),
    ])

    return {
      siteSettings,
      heroSection,
      skills,
      experience,
      projects,
    }
  } catch (error) {
    console.error('Error fetching landing page data:', error)
    return {
      siteSettings: null,
      heroSection: null,
      skills: [],
      experience: [],
      projects: [],
    }
  }
}