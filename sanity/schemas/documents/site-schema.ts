import { defineType, defineField } from 'sanity'

const site = defineType({
	name: 'site',
	title: 'Site Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Site Title',
			type: 'string',
		}),
    {
			name: 'altTitle',
			title: 'Alternative Title',
			type: 'string',
		},
		defineField({
			name: 'foundingYear',
			title: 'Founding Year',
			type: 'string',
		}),
    {
			name: 'addressLocality',
			title: 'Address Locality',
			type: 'string',
			description: 'Example: New York',
		},
		defineField({
			name: 'addressCountry',
			title: 'Address Country',
			type: 'string',
		}),
    {
			name: 'addressRegion',
			title: 'Address Region',
			type: 'string',
			description: 'Example: NY',
		},
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
		defineField({
			name: 'social',
			title: 'Default Social',
			type: 'social',
		}),
		defineField({
			title: 'Default Site SEO / Share Settings',
			name: 'seo',
			type: 'seo',
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
	},
})

export default site
