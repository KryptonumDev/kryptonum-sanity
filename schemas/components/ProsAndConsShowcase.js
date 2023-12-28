import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'ProsAndConsShowcase',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'ProsAndConsList',
      title: 'Pros & cons list',
      type: 'array',
      of: [{type: 'ProsAndCons'}]
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare ({ title }) {
      return {
        title: `[ProsAndConsShowcase] ${removeMarkdown(title)}`
      }
    }
  }
}