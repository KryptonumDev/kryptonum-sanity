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
        {
          type: 'ProcessList_array',
        },
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
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Subheading',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'callToAction',
      type: 'cta',
      title: 'Call to action',
    },
    {
      name: 'callToActionSectionPill',
      type: 'ctaSectionPill',
    }
  ],
  preview: {
    select: {
      title: 'heading',
      ctaSection: 'callToActionSectionPill',
    },
    prepare({title, ctaSection}) {
      return {
        title: `[ Process ] ${ title ? removeMarkdown(title) : ctaSection.cta.text}`,
      }
    },
  },
}
