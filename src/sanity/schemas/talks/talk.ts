import { defineType, defineField } from 'sanity'

export const talk = defineType({
  name: 'talk',
  title: 'Talk/Speaking Event',
  type: 'document',
  icon: () => '🎤',
  fields: [
    defineField({
      name: 'title',
      title: 'Talk Title',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: 'Detailed description of the talk',
    }),
    defineField({
      name: 'event',
      title: 'Event Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'eventLogo',
      title: 'Event Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, Country or "Online"',
    }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Conference', value: 'conference' },
          { title: 'Meetup', value: 'meetup' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Panel Discussion', value: 'panel' },
          { title: 'Keynote', value: 'keynote' },
          { title: 'Lightning Talk', value: 'lightning' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'conference',
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'Slides URL',
          type: 'url',
          description: 'Link to slides (Google Slides, SlideShare, etc.)',
        },
        {
          name: 'file',
          title: 'Slides File',
          type: 'file',
          description: 'Upload slides as PDF or PowerPoint',
        },
      ],
    }),
    defineField({
      name: 'recording',
      title: 'Recording',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'Recording URL',
          type: 'url',
          description: 'YouTube, Vimeo, or other video platform URL',
        },
        {
          name: 'embedCode',
          title: 'Embed Code',
          type: 'text',
          description: 'Video embed code if URL is not sufficient',
        },
      ],
    }),
    defineField({
      name: 'photos',
      title: 'Event Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'resources',
      title: 'Additional Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Resource Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'type',
              title: 'Resource Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Code Repository', value: 'code' },
                  { title: 'Demo', value: 'demo' },
                  { title: 'Article', value: 'article' },
                  { title: 'Documentation', value: 'docs' },
                  { title: 'Other', value: 'other' },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'topics',
      title: 'Topics Covered',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'speakingTopic' }] }],
      description: 'Main topics or technologies discussed',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Talk',
      type: 'boolean',
      initialValue: false,
      description: 'Featured talks appear prominently on the talks page',
    }),
  ],
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'date', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      event: 'event',
      date: 'date',
      featured: 'featured',
      media: 'eventLogo',
    },
    prepare(selection: any) {
      const { title, event, date, featured } = selection
      const formattedDate = date ? new Date(date).getFullYear() : ''
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: `${event} - ${formattedDate}`,
      }
    },
  },
})