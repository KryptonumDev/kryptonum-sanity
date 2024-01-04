import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'RevealableGrid',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'icons',
      type: 'array',
      of: [{type: 'IconDescription'}],
    },
    {
      name: 'grid',
      title: 'Grid (from top left to bottom right)',
      type: 'array',
      of: [{type: 'titleDescriptionAndImg'}],
    },
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title}) {
      return {
        title: `[RevealableGrid] ${removeMarkdown(title)}`
      }
    }
  }
}