import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Remove Site Settings from structure - let it appear normally
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('blogPost').title('Blog Posts'),  
      S.documentTypeListItem('talk').title('Talks'),
    ])