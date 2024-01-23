import {removeMarkdown} from '../../utils/functions'

export default {
  name: 'ProcessList',
  title: 'Process List',
  type: 'object',
  fields: [
    {
      name: 'ProcessList',
      type: 'array',
      of: [
        { type: 'ProcessList_array' },
        { type: 'ProcessList_Showcase' },
        { type: 'ctaSection' },
        { type: 'ctaSectionPill' },
        { type: 'TestimonialsSection' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'ProcessList',
    },
    prepare({title}) {
      return {
        title: `[ProcessList] - ${title.length} blocks`,
      }
    },
  },
}

export const ProcessList_array = {
  name: 'ProcessList_array',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Subheading',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: `[Item] - ${removeMarkdown(heading)}`,
        subtitle: removeMarkdown(subheading),
      }
    },
  },
}

export const ProcessList_Showcase = {
  name: 'ProcessList_Showcase',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctas',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'CTA',
      validation: Rule => Rule.required().min(1).max(2),
    },
  ],
  preview: {
    select: {
      media: 'img',
      title: 'paragraph',
      ctas: 'ctas',
    },
    prepare({ media, title, ctas }) {
      return {
        title: `[Showcase] - ${removeMarkdown(title)}`,
        subtitle: `${ctas.length} CTAs`,
        media,
      }
    },
  },
}