import type { StructureResolver } from 'sanity/structure'

// Define the structure of the Sanity Studio
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings - Singleton
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // Landing Page Sections
      S.listItem()
        .title('Landing Page')
        .id('landingPage')
        .icon(() => '🏠')
        .child(
          S.list()
            .title('Landing Page Sections')
            .items([
              // Hero Section - Singleton
              S.listItem()
                .title('Hero Section')
                .icon(() => '🚀')
                .child(
                  S.document()
                    .schemaType('heroSection')
                    .documentId('heroSection')
                ),
              
              // About Section - Singleton
              S.listItem()
                .title('About Section')
                .icon(() => '👤')
                .child(
                  S.document()
                    .schemaType('aboutSection')
                    .documentId('aboutSection')
                ),
              
              // Skills Section - Singleton
              S.listItem()
                .title('Skills Section')
                .icon(() => '🎯')
                .child(
                  S.document()
                    .schemaType('skillsSection')
                    .documentId('skillsSection')
                ),
              
              // Individual Skills
              S.listItem()
                .title('Skills')
                .icon(() => '⚡')
                .child(
                  S.documentTypeList('skill')
                    .title('Skills')
                ),
              
              // Experience
              S.listItem()
                .title('Work Experience')
                .icon(() => '💼')
                .child(
                  S.documentTypeList('experience')
                    .title('Work Experience')
                ),
              
              // Projects
              S.listItem()
                .title('Projects')
                .icon(() => '🚀')
                .child(
                  S.documentTypeList('project')
                    .title('Projects')
                ),
              
              // Contact Info - Singleton
              S.listItem()
                .title('Contact Information')
                .icon(() => '📧')
                .child(
                  S.document()
                    .schemaType('contactInfo')
                    .documentId('contactInfo')
                ),
            ])
        ),

      S.divider(),

      // Blog System
      S.listItem()
        .title('Blog')
        .id('blog')
        .icon(() => '📝')
        .child(
          S.list()
            .title('Blog Management')
            .items([
              // Blog Posts
              S.listItem()
                .title('Blog Posts')
                .icon(() => '📝')
                .child(
                  S.documentTypeList('blogPost')
                    .title('Blog Posts')
                ),
              
              // Categories
              S.listItem()
                .title('Categories')
                .icon(() => '📁')
                .child(
                  S.documentTypeList('blogCategory')
                    .title('Blog Categories')
                ),
              
              // Authors
              S.listItem()
                .title('Authors')
                .icon(() => '✍️')
                .child(
                  S.documentTypeList('author')
                    .title('Authors')
                ),
            ])
        ),

      S.divider(),

      // Speaking/Talks System
      S.listItem()
        .title('Speaking & Talks')
        .id('speaking')
        .icon(() => '🎤')
        .child(
          S.list()
            .title('Speaking Management')
            .items([
              // Talks
              S.listItem()
                .title('Talks & Presentations')
                .icon(() => '🎤')
                .child(
                  S.documentTypeList('talk')
                    .title('Talks & Presentations')
                ),
              
              // Speaking Topics
              S.listItem()
                .title('Speaking Topics')
                .icon(() => '💡')
                .child(
                  S.documentTypeList('speakingTopic')
                    .title('Speaking Topics')
                ),
            ])
        ),
    ])