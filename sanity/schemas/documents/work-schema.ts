import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'type', title: 'Type', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'job', title: 'Job', type: 'string' },
            { name: 'name', title: 'Name', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'defaultImage',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'defaultImage',
    }),
    defineField({
      name: 'defaultImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      options: {
        list: [
          { title: 'Badge', value: 'badge' },
          { title: 'Button', value: 'button' },
          { title: 'Banner', value: 'banner' },
        ],
      },
    }),
    defineField({
			name: 'sections',
			type: 'sections',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
		}),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})