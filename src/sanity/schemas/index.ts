// Core schemas
import { siteSettings } from './siteSettings'
import { heroSection } from './heroSection'
import { aboutSection } from './aboutSection'
import { skill, skillsSection } from './skills'
import { experience } from './experience'
import { project } from './project'
import { contactInfo } from './contactInfo'

// Blog schemas
import { author } from './blog/author'
import { blogCategory } from './blog/blogCategory'
import { blogPost } from './blog/blogPost'

// Talks schemas
import { talk } from './talks/talk'
import { speakingTopic } from './talks/speakingTopic'

export const schemaTypes = [
  // Site configuration
  siteSettings,
  
  // Landing page sections
  heroSection,
  aboutSection,
  skillsSection,
  skill,
  experience,
  project,
  contactInfo,
  
  // Blog system
  author,
  blogCategory,
  blogPost,
  
  // Speaking/Talks system
  speakingTopic,
  talk,
]