import {defineType, defineField, defineArrayMember} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1900).max(2100),
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'internationalizedArrayString',
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'cs',
          title: 'Česky',
          type: 'richText',
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'richText',
        }),
      ],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (rule) =>
            rule.uri({allowRelative: false, scheme: ['http', 'https']}),
        }),
      ],
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'teamMember',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {title: 'name'},
          },
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      description: 'Odkazy na videa z Instagramu a Vimea',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'url',
          validation: (rule) =>
            rule.uri({allowRelative: false, scheme: ['https']}),
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'internationalizedArrayString',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      media: 'cover',
    },
    prepare({title, year, media}) {
      const localizedTitle = title?.find((t: {_key: string}) => t._key === 'cs')?.value || title?.[0]?.value || 'Untitled'
      return {
        title: localizedTitle,
        subtitle: year ? String(year) : undefined,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Year, New',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
  ],
})
