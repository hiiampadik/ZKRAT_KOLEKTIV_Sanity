import {defineType, defineField, defineArrayMember} from 'sanity'
import {InfoOutlineIcon} from '@sanity/icons'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
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
    prepare() {
      return {title: 'About'}
    },
  },
})
