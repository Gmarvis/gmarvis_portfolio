import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from './src/sanity/schemas/ultra-minimal'

export default defineConfig({
  name: 'gmarvis-portfolio',
  title: 'Gmarvis Portfolio CMS',
  
  projectId: '72c8qzrq',
  dataset: 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  document: {
    // Disable create, delete, and duplicate for singleton documents
    actions: (prev, context) => {
      const singletonTypes = ['siteSettings', 'heroSection', 'aboutSection', 'skillsSection', 'contactInfo']
      
      if (singletonTypes.includes(context.schemaType)) {
        return prev.filter(({ action }) => !['create', 'delete', 'duplicate'].includes(action ?? ''))
      }
      
      return prev
    },
  },
})