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
		defineField({
			name: 'foundingYear',
			title: 'Founding Year',
			type: 'string',
		}),
		defineField({
			name: 'addressCountry',
			title: 'Address Country',
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
