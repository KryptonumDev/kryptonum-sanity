import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'BlocksShowcase',
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
      name: 'blocks',
      title: 'Blocks (from top to bottom)',
      type: 'array',
      of: [{type: 'titleAndImage'}],
    },
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title}) {
      return {
        title: `[BlocksShowcase] ${removeMarkdown(title)}`
      }
    }
  }
}