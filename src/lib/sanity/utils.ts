import { client, serverClient } from './client'
import type {
  SiteSettings,
  HeroSection,
  AboutSection,
  Skill,
  SkillsSection,
  Experience,
  Project,
  ContactInfo,
  BlogPost,
  BlogCategory,
  Talk,
  SpeakingTopic,
} from './types'
import {
  siteSettingsQuery,
  heroSectionQuery,
  aboutSectionQuery,
  skillsQuery,
  skillsSectionQuery,
  experienceQuery,
  projectsQuery,
  featuredProjectsQuery,
  contactInfoQuery,
  blogPostsQuery,
  blogPostQuery,
  blogCategoriesQuery,
  talksQuery,
  talkQuery,
  speakingTopicsQuery,
} from './queries'

// Use server client for SSG/SSR, regular client for client-side
const getClient = (useServerClient = false) => 
  useServerClient ? serverClient : client

// Site Settings
export async function getSiteSettings(useServerClient = false): Promise<SiteSettings | null> {
  return await getClient(useServerClient).fetch(siteSettingsQuery)
}

// Landing Page Data
export async function getHeroSection(useServerClient = false): Promise<HeroSection | null> {
  return await getClient(useServerClient).fetch(heroSectionQuery)
}

export async function getAboutSection(useServerClient = false): Promise<AboutSection | null> {
  return await getClient(useServerClient).fetch(aboutSectionQuery)
}

export async function getSkillsSection(useServerClient = false): Promise<SkillsSection | null> {
  return await getClient(useServerClient).fetch(skillsSectionQuery)
}

export async function getSkills(useServerClient = false): Promise<Skill[]> {
  return await getClient(useServerClient).fetch(skillsQuery)
}

export async function getExperience(useServerClient = false): Promise<Experience[]> {
  return await getClient(useServerClient).fetch(experienceQuery)
}

export async function getProjects(useServerClient = false): Promise<Project[]> {
  return await getClient(useServerClient).fetch(projectsQuery)
}

export async function getFeaturedProjects(useServerClient = false): Promise<Project[]> {
  return await getClient(useServerClient).fetch(featuredProjectsQuery)
}

export async function getContactInfo(useServerClient = false): Promise<ContactInfo | null> {
  return await getClient(useServerClient).fetch(contactInfoQuery)
}

// Blog Data
export async function getBlogPosts(useServerClient = false): Promise<BlogPost[]> {
  return await getClient(useServerClient).fetch(blogPostsQuery)
}

export async function getBlogPost(slug: string, useServerClient = false): Promise<BlogPost | null> {
  return await getClient(useServerClient).fetch(blogPostQuery, { slug })
}

export async function getBlogCategories(useServerClient = false): Promise<BlogCategory[]> {
  return await getClient(useServerClient).fetch(blogCategoriesQuery)
}

// Speaking/Talks Data
export async function getTalks(useServerClient = false): Promise<Talk[]> {
  return await getClient(useServerClient).fetch(talksQuery)
}

export async function getTalk(slug: string, useServerClient = false): Promise<Talk | null> {
  return await getClient(useServerClient).fetch(talkQuery, { slug })
}

export async function getSpeakingTopics(useServerClient = false): Promise<SpeakingTopic[]> {
  return await getClient(useServerClient).fetch(speakingTopicsQuery)
}

// Landing Page - Get all sections at once for better performance
export async function getLandingPageData(useServerClient = false) {
  const [
    siteSettings,
    heroSection,
    aboutSection,
    skillsSection,
    skills,
    experience,
    projects,
    contactInfo,
  ] = await Promise.all([
    getSiteSettings(useServerClient),
    getHeroSection(useServerClient),
    getAboutSection(useServerClient),
    getSkillsSection(useServerClient),
    getSkills(useServerClient),
    getExperience(useServerClient),
    getFeaturedProjects(useServerClient),
    getContactInfo(useServerClient),
  ])

  return {
    siteSettings,
    heroSection,
    aboutSection,
    skillsSection,
    skills,
    experience,
    projects,
    contactInfo,
  }
}

// Blog Page Data
export async function getBlogPageData(useServerClient = false) {
  const [posts, categories] = await Promise.all([
    getBlogPosts(useServerClient),
    getBlogCategories(useServerClient),
  ])

  return { posts, categories }
}

// Talks Page Data
export async function getTalksPageData(useServerClient = false) {
  const [talks, topics] = await Promise.all([
    getTalks(useServerClient),
    getSpeakingTopics(useServerClient),
  ])

  return { talks, topics }
}