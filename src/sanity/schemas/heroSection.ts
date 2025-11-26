import { defineType, defineField } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  icon: () => '🚀',
  fields: [
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      description: 'The main heading text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      description: 'Supporting text under the main headline',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Detailed description about yourself',
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'url',
              title: 'Button URL',
              type: 'url',
            },
            {
              name: 'style',
              title: 'Button Style',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Outline', value: 'outline' },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'object',
      fields: [
        {
          name: 'available',
          title: 'Available for Work',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'message',
          title: 'Availability Message',
          type: 'string',
          description: 'Custom message about your availability',
        },
      ],
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
              description: 'Optional: Custom icon name (for non-standard platforms)',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subheadline',
      media: 'profileImage',
    },
  },
})