import { defineType, defineField } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: () => '⚡',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Database', value: 'database' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Tools', value: 'tools' },
          { title: 'Design', value: 'design' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'proficiencyLevel',
      title: 'Proficiency Level',
      type: 'number',
      description: 'Rate from 1-10 (10 being expert level)',
      validation: (Rule: any) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name or URL for the skill',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of your experience with this skill',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      proficiency: 'proficiencyLevel',
    },
    prepare(selection: any) {
      const { title, subtitle, proficiency } = selection
      return {
        title,
        subtitle: `${subtitle} - Level ${proficiency}/10`,
      }
    },
  },
})

export const skillsSection = defineType({
  name: 'skillsSection',
  title: 'Skills Section',
  type: 'document',
  icon: () => '🎯',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Skills & Technologies',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 3,
      description: 'Brief description about your technical skills',
    }),
    defineField({
      name: 'displayStyle',
      title: 'Display Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid with Levels', value: 'grid-levels' },
          { title: 'Categories', value: 'categories' },
          { title: 'List', value: 'list' },
        ],
      },
      initialValue: 'categories',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Skills Section',
        subtitle: 'Technical skills configuration',
      }
    },
  },
})