import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: () => '🚀',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Short Title',
      type: 'string',
      description: 'Brief description for project cards',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief project description for listings',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Detailed project description',
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image shown in project cards',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of technologies used in the project',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'Link to the live project',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to the GitHub repository',
    }),
    defineField({
      name: 'demoCredentials',
      title: 'Demo Credentials',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Demo Email',
          type: 'string',
        },
        {
          name: 'password',
          title: 'Demo Password',
          type: 'string',
        },
      ],
      description: 'Login credentials for demo purposes',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Show this project prominently',
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Planned', value: 'planned' },
          { title: 'On Hold', value: 'on-hold' },
        ],
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Application', value: 'web-app' },
          { title: 'Mobile App', value: 'mobile-app' },
          { title: 'Desktop App', value: 'desktop-app' },
          { title: 'API/Backend', value: 'api' },
          { title: 'Library/Package', value: 'library' },
          { title: 'Website', value: 'website' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortTitle',
      media: 'featuredImage',
      featured: 'featured',
      status: 'status',
    },
    prepare(selection: any) {
      const { title, subtitle, featured, status } = selection
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: `${subtitle || ''} - ${status}`,
      }
    },
  },
})