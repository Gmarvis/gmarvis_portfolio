import type { StructureResolver } from 'sanity/structure'

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

      // Projects
      S.listItem()
        .title('Projects')
        .icon(() => '🚀')
        .child(
          S.documentTypeList('project')
            .title('Projects')
        ),

      // Blog Posts
      S.listItem()
        .title('Blog Posts')
        .icon(() => '📝')
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
        ),

      // Talks
      S.listItem()
        .title('Talks')
        .icon(() => '🎤')
        .child(
          S.documentTypeList('talk')
            .title('Talks')
        ),
    ])