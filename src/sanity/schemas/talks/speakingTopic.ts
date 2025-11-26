import { defineType, defineField } from 'sanity'

export const speakingTopic = defineType({
  name: 'speakingTopic',
  title: 'Speaking Topic',
  type: 'document',
  icon: () => '💡',
  fields: [
    defineField({
      name: 'name',
      title: 'Topic Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of your expertise in this topic',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name or emoji representing this topic',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend Development', value: 'frontend' },
          { title: 'Backend Development', value: 'backend' },
          { title: 'Mobile Development', value: 'mobile' },
          { title: 'DevOps & Cloud', value: 'devops' },
          { title: 'Data Science & AI', value: 'data-science' },
          { title: 'Design & UX', value: 'design' },
          { title: 'Career & Leadership', value: 'career' },
          { title: 'Entrepreneurship', value: 'entrepreneurship' },
          { title: 'Open Source', value: 'open-source' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})