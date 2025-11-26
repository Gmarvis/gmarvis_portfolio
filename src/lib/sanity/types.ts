// Sanity Types for the Portfolio CMS

export interface SiteSettings {
  _id: string
  siteTitle: string
  siteDescription: string
  favicon?: any
  ogImage?: any
  themeColors?: {
    primary?: any
    secondary?: any
  }
  googleAnalyticsId?: string
}

export interface HeroSection {
  _id: string
  greeting?: string
  name: string
  title?: string
  description?: any[] // Portable Text array
  profileImage?: any
  resumeUrl?: string
}

export interface AboutSection {
  _id: string
  title: string
  content: any[] // Portable Text
  profileImage?: any
  location?: string
  currentRole?: string
  yearsOfExperience?: number
  highlights?: string[]
}

export interface Skill {
  _id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'tools' | 'design' | 'other'
  proficiencyLevel: number
  icon?: string
  description?: string
}

export interface SkillsSection {
  _id: string
  title: string
  description?: string
  displayStyle: 'grid-levels' | 'categories' | 'list'
}

export interface Experience {
  _id: string
  jobTitle: string
  company: string
  companyLogo?: any
  location?: string
  startDate: string
  endDate?: string
  current: boolean
  description: any[] // Portable Text
  technologies: string[]
  achievements: string[]
}

export interface Project {
  _id: string
  name: string
  shortTitle?: string
  description: string
  fullDescription?: any[] // Portable Text
  images?: any[]
  featuredImage?: any
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  demoCredentials?: {
    email: string
    password: string
  }
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned' | 'on-hold'
  category?: string
}

export interface ContactInfo {
  _id: string
  name: string
  displayName?: string
  title?: string
  email: string
  phone?: string
  location?: string
  availability?: {
    status: 'available' | 'limited' | 'unavailable'
    message?: string
  }
  contactMessage?: any[] // Portable Text
  socialLinks?: Array<{
    platform: string
    url: string
    icon?: string
  }>
  resumeFile?: any
}

export interface Author {
  _id: string
  name: string
  bio?: string
  avatar?: any
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  website?: string
}

export interface BlogCategory {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  color?: any
  icon?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  content: any[] // Portable Text
  featuredImage?: any
  author: Author
  categories?: BlogCategory[]
  tags?: string[]
  publishedAt: string
  featured: boolean
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: any
  }
}

export interface SpeakingTopic {
  _id: string
  name: string
  description?: string
  icon?: string
  category?: string
}

export interface Talk {
  _id: string
  title: string
  slug: { current: string }
  description: any[] // Portable Text
  event: string
  eventLogo?: any
  date: string
  location?: string
  type: 'conference' | 'meetup' | 'workshop' | 'webinar' | 'podcast' | 'panel' | 'keynote' | 'lightning' | 'other'
  slides?: {
    url?: string
    file?: any
  }
  recording?: {
    url?: string
    embedCode?: string
  }
  photos?: Array<{
    asset: any
    alt?: string
    caption?: string
  }>
  resources?: Array<{
    title: string
    url: string
    type: 'code' | 'demo' | 'article' | 'docs' | 'other'
  }>
  topics?: SpeakingTopic[]
  featured: boolean
}