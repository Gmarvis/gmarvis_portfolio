import { siteSettings } from './siteSettings'
import { project } from './project-clean'
import { blogPost } from './blog-clean'
import { talk } from './talk-clean'

export const schemaTypes = [siteSettings, project, blogPost, talk]

export default schemaTypes