import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'TestimonialsSection',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      description: 'If the list is empty, the latest 3 testimonials will be shown.',
      type: 'array',
      of: [
        { type: 'TestimonialsSection_Item' }
      ]
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list'
    },
    prepare({ title, list }) {
      return {
        title: `[TestimonialsSection] - ${removeMarkdown(title)}`,
        subtitle: list ? `${list.length} testimonials` : 'The latest 3 testimonials will be shown.'
      }
    }
  }
}

export const TestimonialsSection_Item = {
  name: 'TestimonialsSection_Item',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'text',
      type: 'markdown',
      title: 'Text'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
      media: 'img',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: removeMarkdown(subtitle),
        media,
      }
    },
  },
}