import { defineType, defineField } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  icon: () => '📧',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
      description: 'Name as shown publicly',
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'Your job title or profession',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, Country or Timezone',
    }),
    defineField({
      name: 'availability',
      title: 'Work Availability',
      type: 'object',
      fields: [
        {
          name: 'status',
          title: 'Availability Status',
          type: 'string',
          options: {
            list: [
              { title: 'Available for Work', value: 'available' },
              { title: 'Busy - Limited Availability', value: 'limited' },
              { title: 'Not Available', value: 'unavailable' },
            ],
          },
          initialValue: 'available',
        },
        {
          name: 'message',
          title: 'Custom Message',
          type: 'string',
          description: 'Custom availability message',
        },
      ],
    }),
    defineField({
      name: 'contactMessage',
      title: 'Contact Section Message',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: 'Message displayed in the contact section',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Dribbble', value: 'dribbble' },
                  { title: 'Behance', value: 'behance' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Dev.to', value: 'devto' },
                  { title: 'Other', value: 'other' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'icon',
              title: 'Custom Icon',
              type: 'string',
              description: 'Icon name for custom platforms',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume/CV File',
      type: 'file',
      description: 'Upload your resume or CV',
    }),
  ],
  preview: {
    select: {
      title: 'displayName',
      subtitle: 'title',
    },
  },
})