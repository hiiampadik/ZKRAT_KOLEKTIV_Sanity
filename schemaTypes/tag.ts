import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      const localizedTitle =
        title?.find((t: {_key: string}) => t._key === 'cs')?.value ||
        title?.[0]?.value ||
        'Untitled'
      return {title: localizedTitle}
    },
  },
})
