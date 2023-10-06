import { removeMarkdown } from "../../utils/functions"

export default {
  name: "Process",
  title: "Process",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'titleAndDescription'
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      blocks: 'blocks'
    },
    prepare({ title, blocks }) {
      return {
        title: `[Process] ${removeMarkdown(title)}`,
        subtitle: `${blocks.length} items`,
      }
    }
  }
}