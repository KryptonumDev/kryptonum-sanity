import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'WindowsShowcase',
  title: 'Windows showcase',
  type: 'object',
  fields: [
    {
      name: 'isSign',
      type: 'boolean',
      initialValue: false,
    },
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
      name: 'windows',
      title: 'Windows (from top left to bottom right)',
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
        title: `[WindowsShowcase] ${removeMarkdown(title)}`
      }
    }
  }
}