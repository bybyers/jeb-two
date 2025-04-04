import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'defaultImage',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'clientList',
      title: 'Client List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})